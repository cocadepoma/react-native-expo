import { View, ActivityIndicator, StyleProp, ImageStyle, Animated } from 'react-native'
import React, { useState } from 'react'
import { useAnimation } from '@/hooks/use-animation';

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>
}

const FadeInImage = ({
  uri,
  style,
}: Props) => {
  const {animatedOpacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {isLoading && (
          <ActivityIndicator 
            size={30} 
            color={'grey'} 
            style={{ position: 'absolute' }}
          />
        )
      }

      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          setIsLoading(false);
          fadeIn({});
        }}
      />
    </View>
  )
}

export default FadeInImage