import AsyncStorage from '@react-native-async-storage/async-storage';
import { colorScheme as nativewindColorScheme } from 'nativewind';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Platform, useColorScheme as useDeviceColorScheme } from 'react-native';

export type ThemePreference = 'light' | 'dark' | 'system';

const THEME_PREFERENCE_KEY = '@deveser/components-app/theme-preference';

interface AppThemeContextProps {
  colorScheme: 'light' | 'dark';
  setThemePreference: (themePreference: ThemePreference) => void;
  systemColorScheme: 'light' | 'dark';
  themePreference: ThemePreference;
}

const AppThemeContext = createContext<AppThemeContextProps | null>(null);

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const deviceColorScheme = useDeviceColorScheme();
  const [hasHydrated, setHasHydated] = useState(Platform.OS !== 'web');
  const [themePreference, setThemePreference] = useState<ThemePreference>('system');
  const hasLoadedThemePreference = useRef(false);

  useEffect(() => {
    if (!hasHydrated) {
      setHasHydated(true);
    }
  }, [hasHydrated]);

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const storedThemePreference = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);

        if (
          storedThemePreference === 'light'
          || storedThemePreference === 'dark'
          || storedThemePreference === 'system'
        ) {
          setThemePreference(storedThemePreference);
        }
      } catch (error) {
        console.warn('Unable to load theme preference', error);
      } finally {
        hasLoadedThemePreference.current = true;
      }
    };

    loadThemePreference();
  }, []);

  const systemColorScheme = hasHydrated ? (deviceColorScheme ?? 'light') : 'light';
  const colorScheme = themePreference === 'system' ? systemColorScheme : themePreference;

  useEffect(() => {
    nativewindColorScheme.set(themePreference);
  }, [themePreference]);

  useEffect(() => {
    if (!hasLoadedThemePreference.current) return;

    AsyncStorage.setItem(THEME_PREFERENCE_KEY, themePreference).catch((error) => {
      console.warn('Unable to persist theme preference', error);
    });
  }, [themePreference]);

  const value = useMemo(
    () => ({
      colorScheme,
      setThemePreference,
      systemColorScheme,
      themePreference,
    }),
    [colorScheme, systemColorScheme, themePreference]
  );

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
};

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }

  return context;
};

export const useAppColorScheme = () => useAppTheme().colorScheme;