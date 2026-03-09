import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AppThemeProvider } from '@/hooks/use-app-theme';
import { useThemeColor } from '@/hooks/use-theme-color';

import { allRoutes } from '@/constants/Routes';

import "../global.css"

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <AppNavigation />
    </AppThemeProvider>
  );
}

function AppNavigation() {
  const colorScheme = useColorScheme();
  const bgColor = useThemeColor({}, 'background');
  
  return (
    <GestureHandlerRootView style={{ backgroundColor: bgColor, flex: 1}}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: bgColor },
          headerStyle: { backgroundColor: bgColor },
        }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />

          {
            allRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{ 
                  title: route.title,
                  headerShown: route.headerShown ?? true,
                }}
              />
            ))
          }
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
