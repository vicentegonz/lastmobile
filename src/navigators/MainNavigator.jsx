import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Login from '@/views/Login.jsx';
import Loading from '@/views/Loading.jsx';
import api from '@/api';
import { removeCredentials } from '@/utils/credentials';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlerts } from '@/store/alertSlice';
import { fetchServices } from '@/store/servicesSlice';
import { fetchKPIs } from '@/store/kpiSlice';
import { setValidSession, setLoginValue } from '@/store/session';
import { clear as clearProfile, fetchUser } from '@/store/profileSlice';
import AdministratorNavigator from './AdministratorNavigator.jsx';

export default function MainNavigator() {
  // Use this navigator to hide the splash screen
  // based on some sort of indicator

  const applicationReady = true;

  useEffect(() => {
    // Every time thet `applicationReady` changes,
    // check if it is true, and hide the splash screen
    // when it is.

    async function hideSplashScreen() {
      if (applicationReady) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [applicationReady]);

  const session = useSelector((state) => state.session.status);
  const alertStatus = useSelector((state) => state.alert.status);
  const dispatch = useDispatch();

  const currentStore = useSelector((state) => state.profile.currentStore);
  const kpiStatus = useSelector((state) => state.kpi.status);
  const serviceStatus = useSelector((state) => state.services.status);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    async function validateSession() {
      const response = await api.account.validate();
      if (response.status === 200) {
        dispatch(fetchUser());
        dispatch(setValidSession(true));
      }
      setLoadingSession(false);
    }
    validateSession();
  }, [dispatch]);

  useEffect(() => {
    async function validateLandingData() {
      if (currentStore !== 'empty' && currentStore !== undefined) {
        await dispatch(fetchKPIs(currentStore));
        await dispatch(fetchServices(currentStore));
        await dispatch(fetchAlerts(currentStore));
      }
      if (currentStore === 'empty') {
        await removeCredentials();
        await dispatch(setValidSession(false));
        await dispatch(clearProfile());
        await dispatch(setLoginValue('notFound'));
      }
      return null;
    }
    validateLandingData();
  }, [dispatch, currentStore]);

  // Return nothing if application is not ready
  if (!applicationReady) {
    return null;
  }

  // Use this navigator to render different navigators
  // based on the user being logged in or not
  if (session && !loadingSession && kpiStatus && serviceStatus && alertStatus) {
    return <AdministratorNavigator />;
  }
  // Using the same navigator, just as a placeholder
  if (!session && !loadingSession) {
    return <Login />;
  }

  return <Loading />;
}
