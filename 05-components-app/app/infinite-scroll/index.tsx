import { useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedView from '@/presentation/shared/ThemedView';
import FadeInImage from '@/presentation/images/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [isLoading, setIsLoading] = useState(false);

  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    setIsLoading(true);
    const newArray = Array.from({ length: 7 }, (_, i) => i + numbers.length);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
      setIsLoading(false);
    }, 2000);

  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          isLoading
            ? (
              <View style={{ height: 150, justifyContent: 'center' }}>
                <ActivityIndicator size={30} color={primaryColor} />
              </View>
            )
            : null
        )}
      />
    </ThemedView>
  );
};

export default InfiniteScrollScreen;


interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage 
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ width: '100%', height: 400 }}
    />
  );
}