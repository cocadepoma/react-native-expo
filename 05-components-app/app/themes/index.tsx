import { ThemePreference, useAppTheme } from '../../hooks/use-app-theme';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Pressable, View } from 'react-native';

const themeOptions: {
  description: string;
  label: string;
  value: ThemePreference;
}[] = [
  {
    value: 'light',
    label: 'Light',
    description: 'Always use the light theme.',
  },
  {
    value: 'dark',
    label: 'Dark',
    description: 'Always use the dark theme.',
  },
  {
    value: 'system',
    label: 'System',
    description: 'Follow the device appearance automatically.',
  },
];

interface ThemeOptionProps {
  description: string;
  isSelected: boolean;
  label: string;
  onPress: () => void;
}

const ThemeOption = ({ description, isSelected, label, onPress }: ThemeOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`mb-3 flex-row items-center justify-between rounded-xl border px-4 py-4 active:opacity-80 ${
        isSelected
          ? 'border-violet-700 bg-violet-50 dark:border-violet-400 dark:bg-violet-500/10'
          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-black/10'
      }`}
    >
      <View className='flex-1 pr-4'>
        <ThemedText type='h2'>{label}</ThemedText>
        <ThemedText className='mt-1 opacity-70'>{description}</ThemedText>
      </View>

      <View
        className={`h-5 w-5 rounded-full border-2 ${
          isSelected
            ? 'border-violet-700 bg-violet-700 dark:border-violet-400 dark:bg-violet-400'
            : 'border-slate-300 dark:border-slate-600'
        } items-center justify-center`}
      >
        {isSelected && <View className='h-2 w-2 rounded-full bg-white dark:bg-slate-900' />}
      </View>
    </Pressable>
  );
};

const ThemesScreen = () => {
  const { colorScheme, setThemePreference, systemColorScheme, themePreference } = useAppTheme();

  return (
    <ThemedView margin>
      <ThemedCard className='mt-5'>
        <ThemedText type='h1' className='mb-2'>Theme</ThemedText>
        <ThemedText className='mb-5 opacity-70'>
          Choose how the app should look. Current theme: {colorScheme}.
        </ThemedText>

        {themeOptions.map((option) => (
          <ThemeOption
            key={option.value}
            label={option.label}
            description={
              option.value === 'system'
                ? `${option.description} System is currently ${systemColorScheme}.`
                : option.description
            }
            isSelected={themePreference === option.value}
            onPress={() => setThemePreference(option.value)}
          />
        ))}
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
