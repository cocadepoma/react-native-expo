import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';

const ModalScreen = () => {
  return (
    <ThemedView margin={false} className='justify-center items-center flex-1'>
      <ThemedButton
        onPress={() => {
          router.push('/modal/modal-window');
        }}
      >
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
