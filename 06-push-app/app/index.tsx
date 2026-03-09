import { View, Button, FlatList } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { usePushNotifications } from '@/hooks/use-push-notifications';

export default function App() {
  const { expoPushToken, notifications, sendPushNotification } = usePushNotifications();
  
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <ThemedText>Your Expo push token: {expoPushToken}</ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
            <ThemedText>Title: {item.request.content.title}</ThemedText>
            <ThemedText>Body: {item.request.content.body}</ThemedText>
            <ThemedText>Data: {JSON.stringify(item.request.content.data, null, 2)}</ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: 'grey', opacity: 0.5}} />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 20,
            }}
          >
            <ThemedText>No notifications received yet.</ThemedText>
          </View>
        )}
      />

      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification({ to: [expoPushToken], title: 'PushApp Notification', body: 'This is a test notification from the app' });
        }}
      />
    </View>
  );
}
