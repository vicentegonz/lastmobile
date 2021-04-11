import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import ExampleNavigator from './ExampleNavigator.jsx';

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

  // Return nothing if application is not ready
  if (!applicationReady) {
    return null;
  }

  // Use this navigator to render different navigators
  // based on the user being logged in or not

  const loggedIn = true;

  if (loggedIn) {
    return <ExampleNavigator />;
  }

  // Using the same navigator, just as a placeholder
  return <ExampleNavigator />;
}
