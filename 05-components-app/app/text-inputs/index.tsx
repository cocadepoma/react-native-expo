import { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';


const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior="height"
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder="Full name"
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />

            <ThemedTextInput
              placeholder="Email"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(value) => setForm({ ...form, email: value })}
            />

            <ThemedTextInput
              placeholder="Phone number"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />

          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className='mb-4'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder="Phone number"
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(value) => setForm({ ...form, phone: value })}
            />
          </ThemedCard>
        </ThemedView>

        <View style={{ height: 115 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
