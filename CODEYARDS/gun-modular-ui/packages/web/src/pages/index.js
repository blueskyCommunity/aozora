import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Box, Button, Row, Text } from 'elemental-react';

// import Gun from 'gun/gun';

// import Gallery from '../../../components/src/common/Gallery';

import Layout from '../components/gatsby/layout';
import SEO from '../components/gatsby/seo';
import useWindowViewport from '../hooks/use-window-viewport';
import { useGun } from '../contexts/context';

// import AppBar from '../../../components/lib/common/AppBar';
// import NavOverlay from '../../../components/lib/overlays/NavOverlay';
// import Section from '../../../components/lib/common/Section';
// import Footer from '../../../components/lib/common/Footer';

// import HomeTimeline from '../components/routes/home-timeline';

import TextInput from '../components/common/TextInput';


const Home = () => {
  const viewport = useWindowViewport();
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const [list, setList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  // const [gun, setGun] = useState(new Gun());
  // const [user, setUser] = useState();

  // useEffect(async () => {
  //   if (gun && typeof gun.user === 'function') {
  //     setUser(gun.user());
  //   }
  // }, [gun]);
  const { gun, user } = useGun();

  console.log({ user, create: user.create });

  const doSignin = () => {
    if (user?.auth) {
        user.auth(username, password, (d) => {
          if (d.err) {
              console.log('err', d.err);
              return;
          }

        setAuthenticated(true);
      });
    }
  };

  const doSignup = () => {
    if (user?.create) {
      user.create(username, password, (d) => {
        if (d.err) {
          console.log('err: ', d.err);
          return;
        }

        doSignin();
      });
    }
  };

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Box width="100vw"> */}
      <Box bg="white" minHeight={viewport.height} width="100%">
        <Box bg="white">
          <Text>Hello, World!</Text>
          {authenticated ? (
            <>
              Authenticated
            </>
          ) : (
            <Box>
              <Box>
                <Text as={TextInput} fontSize={20} style={null} placeholder="Username" onChangeText={(username) => setUsername(username)} value={username} />
                <Text as={TextInput} placeholder="Password" onChangeText={(password) => setPassword(password)} value={password} />
                <Button onClick={doSignin}>
                  <Text>Sign in</Text>
                </Button>
                <Button onClick={doSignup}>
                  <Text>Sign up</Text>
                </Button>
              </Box>
            </Box>
          )}
          {/* <AppBar>
            <AppBar.MenuIcon onClick={() => { setNavOverlayOpen(!navOverlayOpen); }} />
            <AppBar.Title />
            <AppBar.Fill />
          </AppBar>
          <HomeTimeline />
          <Footer />
          {navOverlayOpen && (
            <Box position="fixed" bg="white" width="100vw" height="100vh">
              <NavOverlay onMenuClick={() => { setNavOverlayOpen(!navOverlayOpen); }} />
            </Box>
          )} */}
        </Box>
      </Box>
      {/* </Box> */}
    </Layout>
  );
}

export default Home;
