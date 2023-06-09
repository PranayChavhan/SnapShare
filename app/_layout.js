import { SplashScreen, Stack } from "expo-router";


import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';  

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return <SplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}  />

  );
}