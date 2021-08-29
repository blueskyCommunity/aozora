import { useContext } from 'react';

import { State, GunContext } from './GunProvider';

export const useGun = () => {
  const { state } = useContext(GunContext);

  return state;
};
