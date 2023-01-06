import React, { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import AppNavigation from './app/scripts/AppNavigation';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'poppins-regular': require('./app/assets/fonts/Poppins-Regular.ttf'),
          'poppins-medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
          'poppins-semibold' : require('./app/assets/fonts/Poppins-SemiBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);


  if (!appIsReady) {
    return null;
  }

  else {
    SplashScreen.hideAsync();
    return (
      <AppNavigation/>

    );
  }
}
