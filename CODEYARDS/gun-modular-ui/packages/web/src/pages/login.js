import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { Box, Button, Row, Text, extend } from 'elemental-react';
import { Formik } from 'formik';
import styled from 'styled-components';

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
import InputField from '../components/common/InputField';

const Column = extend(Box, () => ({}));

// &:focus-visible

const LoginButton = extend(Button, () => ({
  borderWidth: '0px',
  bg: 'blue',
  color: 'white',
  borderRadius: 3,
  fontSize: 16,
}));

const anyValueTouched = (touched) => {
  let isTouched = false;
  Object.keys(touched).forEach((k) => {
    if (touched[k]) {
      isTouched = true;
    }
  });
  return isTouched;
};

const AuthTextInput = styled(TextInput)`
  &:focus-visible {
    outline: none;
    border-radius: 3px;
    border: solid 2px #00a1ff;
  }
`;

const SignupButton = extend(Button, () => ({
  borderWidth: '0px',
  color: 'blue',
}));

const Home = () => {
  const viewport = useWindowViewport();
  const [navOverlayOpen, setNavOverlayOpen] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const [list, setList] = useState([]);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('')

  // const [gun, setGun] = useState(new Gun());
  // const [user, setUser] = useState();

  // useEffect(async () => {
  //   if (gun && typeof gun.user === 'function') {
  //     setUser(gun.user());
  //   }
  // }, [gun]);
  const { gun, user } = useGun();

  const doSignin = (username, password) => {
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

  const doSignup = (username, password) => {
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

  // <Text as={TextInput} fontSize={20} style={null} placeholder="Username" onChangeText={(username) => setUsername(username)} value={username} />
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Box width="100vw"> */}
      <Box bg="white" minHeight={viewport.height} width="100%">
        <Box testId="AppBar">
          <Text>
            {authenticated ? 'Authenticated' : ''}
          </Text>
        </Box>
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
          <Column flex={1} px={16} alignItems="center" justifyContent="center">
            <Box width={['100%', '512px']} borderWidth={[0, 1]} borderRadius={3} borderColor="gray" p={[0, 40]}>
              <Text fontSize={24} bold my={3} center>
                GUN Modular UI
              </Text>
              <Text fontSize={24} center>
                Sign in
              </Text>
              <Formik
              initialValues={{ username: '', password: '' }}
              onSubmit={values => {
                doSignin(values.username, values.password);
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Please enter a username';
                }
                if (!values.password) {
                  errors.password = 'Please enter a password';
                } else if (values.password.length <= 8) {
                  errors.password = 'Too short';
                }

                return errors;
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <Box width="100%" pt={32}>
                    <InputField label="Username" error={touched.username && errors.username} onBlur={handleBlur('username')} value={values.username}>
                      {({ label, value, error, placeholder, onFocusChange }) => (
                        <AuthTextInput
                          width="100%"
                          fontSize={16}
                          p={16}
                          style={null}
                          borderRadius={3}
                          onChangeText={handleChange('username')}
                          {...{ label, error, value, placeholder, onFocusChange }}
                        />
                      )}
                    </InputField>
                    <InputField label="Password" error={touched.password && errors.password} onBlur={handleBlur('password')} value={values.password}>
                      {({ label, value, error, placeholder, onFocusChange }) => (
                        <AuthTextInput
                          width="100%"
                          fontSize={16}
                          p={16}
                          style={null}
                          borderRadius={3}
                          onChangeText={handleChange('password')}
                          {...{ label, error, value, placeholder, onFocusChange }}
                        />
                      )}
                    </InputField>
                  </Box>
                  <Row justifyContent="space-between" width="100%" mt={24}>
                    <SignupButton onClick={doSignup}>
                      Create account
                    </SignupButton>
                    <LoginButton
                      bg={Object.keys(touched).length > 0 && Object.keys(errors).length > 0 ? 'gray' : 'blue'}
                      onClick={handleSubmit}
                      cursor="pointer"
                    >
                      LOGIN
                    </LoginButton>
                  </Row>
                </>
              )}
            </Formik>
            </Box>
          </Column>
          <Box as="footer" p={16} alignItems="center">
            <Text>
              Footer
            </Text>
          </Box>
      </Box>
      {/* </Box> */}
    </Layout>
  );
}

export default Home;
