import React, {
  createContext,
} from 'react';
// import Platform from 'react-primitives';


const initialState = {
  state: {
    gun: null,
    user: null,
  },
  dispatch: () => {},
};

const GunContext = createContext(initialState);

// const reducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'resize': {
//       return {
//         ...state,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const GunProvider = ({ gun, children }) => {
  // const [state, dispatch] = Platform.OS === 'sketch' ? [{
  //   ...initialState,
  // }, () => {}] : useReducer(reducer, initialState);
  const state = { gun, user: gun.user && gun.user() };
  const dispatch = () => {};
  const value = { state, dispatch };

  return (
    <GunContext.Provider value={value}>
      {children}
    </GunContext.Provider>
  );
};

function withContext(Component) {
  return React.forwardRef((props, ref) => (
    <GunContext.Consumer>
      {value => <Component forwardedRef={ref} {...props} value={value} />}
    </GunContext.Consumer>
  ));
};

const GunContextConsumer = GunContext.Consumer;

export { GunProvider, GunContext, GunContextConsumer, withContext };