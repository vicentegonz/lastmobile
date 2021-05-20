/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { removeCredentials } from '@/utils/credentials';
import { useDispatch } from 'react-redux';
import { setValidSession } from '@/store/session';

export default function LogoutButton({ state, navigation, descriptors }) {
  const dispatch = useDispatch();

  const handler = async () => {
    await removeCredentials();
    dispatch(setValidSession(false));
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
      <DrawerItem label="Cerrar sesión" onPress={handler} />
    </DrawerContentScrollView>
  );
}

LogoutButton.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
};
