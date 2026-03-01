import { View } from 'react-native';

import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import ThemedView from '@/presentation/shared/ThemedView';
import MenuItem from '@/presentation/menu/MenuItem';

const ComponentsApp = () => {
  return (
    <ThemedView safe>
      {
        animationMenuRoutes.map((route, index) => (
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }

      <View className='my-3' />

      {
        uiMenuRoutes.map((route, index) => (
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === uiMenuRoutes.length - 1}
          />
        ))
      }

      <View className='my-3' />

      {
        menuRoutes.map((route, index) => (
          <MenuItem 
            key={route.title}
            title={route.title}
            icon={route.icon}
            name={route.name}
            isFirst={index === 0}
            isLast={index === menuRoutes.length - 1}
          />
        ))
      } 
    </ThemedView>
  );
};
export default ComponentsApp;
