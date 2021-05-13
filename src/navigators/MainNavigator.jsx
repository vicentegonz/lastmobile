import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Login from '@/views/Login.jsx';
import Loading from '@/views/Loading.jsx';
import api from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { success } from '@/store/userSlice';
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

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.status);

  useEffect(() => {
    async function verifyRefreshToken() {
      const response = await api.account.refreshAuthenticate();
      setLoading(false);
      if (response.access && response.refresh) {
        dispatch(success());
      }
    }
    verifyRefreshToken();
  }, [dispatch]);

  // Return nothing if application is not ready
  if (!applicationReady) {
    return null;
  }

  // Use this navigator to render different navigators
  // based on the user being logged in or not

  if (user && !loading) {
    return <AdministratorNavigator />;
  }

  // Using the same navigator, just as a placeholder
  if (!loading && !user) {
    return <Login />;
  }
  return <Loading />;
}
