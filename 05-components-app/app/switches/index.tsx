import { useState } from 'react';

import ThemeCard from '@/presentation/shared/ThemedCard';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });


  return (
    <ThemedView margin className='mt-2'>
      <ThemeCard>
        <ThemedSwitch
          text='Active'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Jungry'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4' />

        <ThemedSwitch
          text='Happy'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />

      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
