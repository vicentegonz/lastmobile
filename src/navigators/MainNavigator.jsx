import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Login from '@/views/Login.jsx';
import Loading from '@/views/Loading.jsx';
import api from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/store/profileSlice';
import { fetchEvents } from '@/store/eventSlice';
import { fetchServices } from '@/store/servicesSlice';
import { fetchKPIs } from '@/store/kpiSlice';

import { setValidSession } from '@/store/session';
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

  // const [loading, setLoading] = useState(true);

  const session = useSelector((state) => state.session.status);
  const eventStatus = useSelector((state) => state.event.status);
  const dispatch = useDispatch();

  const currentStore = useSelector((state) => state.profile.currentStore);
  const kpiStatus = useSelector((state) => state.kpi.status);
  const serviceStatus = useSelector((state) => state.services.status);

  useEffect(() => {
    async function validateSession() {
      const response = await api.account.validate();
      if (response.status === 200) {
        dispatch(fetchUser());
        dispatch(setValidSession(true));
      }
    }
    validateSession();
  }, [dispatch]);

  useEffect(() => {
    async function validateLandingData() {
      if (currentStore) {
        await dispatch(fetchKPIs(currentStore));
        await dispatch(fetchServices(currentStore));
        await dispatch(fetchEvents(currentStore));
      }
    }
    validateLandingData();
  }, [dispatch, currentStore]);

  // Return nothing if application is not ready
  if (!applicationReady) {
    return null;
  }

  // Use this navigator to render different navigators
  // based on the user being logged in or not

  if (session && kpiStatus && serviceStatus && eventStatus) {
    return <AdministratorNavigator />;
  }

  // Using the same navigator, just as a placeholder
  if (!session) {
    return <Login />;
  }
  return <Loading />;
}
