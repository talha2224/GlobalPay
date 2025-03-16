import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/password" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/otp" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/password" options={{ headerShown: false }} />

        <Stack.Screen name="auth/register/business/index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/business/otp" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/business/password" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/business/company" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register/business/final" options={{ headerShown: false }} />


        <Stack.Screen name="home/index" options={{ headerShown: false }} />
        <Stack.Screen name="home/notification" options={{ headerShown: false }} />
        <Stack.Screen name="home/card" options={{ headerShown: false }} />
        <Stack.Screen name="home/deposit" options={{ headerShown: false }} />
        <Stack.Screen name="home/qr" options={{ headerShown: false }} />
        <Stack.Screen name="home/withdraw" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile" options={{ headerShown: false }} />
        <Stack.Screen name="home/security" options={{ headerShown: false }} />
        <Stack.Screen name="home/payment" options={{ headerShown: false }} />
        <Stack.Screen name="home/community" options={{ headerShown: false }} />
        <Stack.Screen name="home/about" options={{ headerShown: false }} />
        <Stack.Screen name="home/verify/nationality" options={{ headerShown: false }} />
        <Stack.Screen name="home/verify/personal" options={{ headerShown: false }} />
        <Stack.Screen name="home/verify/final" options={{ headerShown: false }} />



        <Stack.Screen name="admin/index" options={{ headerShown: false }} />
        <Stack.Screen name="admin/api" options={{ headerShown: false }} />
        <Stack.Screen name="admin/transactions" options={{ headerShown: false }} />
        <Stack.Screen name="admin/document" options={{ headerShown: false }} />
        <Stack.Screen name="admin/profile" options={{ headerShown: false }} />
        <Stack.Screen name="admin/notification" options={{ headerShown: false }} />




        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
