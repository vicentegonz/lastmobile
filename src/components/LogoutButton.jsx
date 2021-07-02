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
import { setValidSession, clear as clearSession } from '@/store/session';
import { clear as clearEvent } from '@/store/eventSlice';
import { clear as clearStore } from '@/store/storeSlice';
import { clear as clearServices } from '@/store/servicesSlice';
import { clear as clearProfile } from '@/store/profileSlice';
import { clear as clearKpi } from '@/store/kpiSlice';

export default function LogoutButton({ state, navigation, descriptors }) {
  const dispatch = useDispatch();

  const handler = async () => {
    await removeCredentials();
    await dispatch(setValidSession(false));
    await dispatch(clearSession());
    await dispatch(clearEvent());
    await dispatch(clearStore());
    await dispatch(clearServices());
    await dispatch(clearProfile());
    await dispatch(clearKpi());
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
