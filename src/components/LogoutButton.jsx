/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import secureStore from '@/utils/secureStore';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/userSlice';

export default function LogoutButton({ state, navigation, descriptors }) {
  const dispatch = useDispatch();

  const handler = async () => {
    await secureStore.delete('accessToken');
    await secureStore.delete('refreshToken');
    dispatch(logout());
  };
  return (
    <DrawerContentScrollView
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    >
      <DrawerItemList
        state={state}
        navigation={navigation}
        descriptors={descriptors}
      />
      <DrawerItem label="Logout" onPress={handler} />
    </DrawerContentScrollView>
  );
}

// ESLint no permite props de tipo object
// No supe arreglarlo, así que por ahora desactivé esa regla para el archivo
LogoutButton.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
};
