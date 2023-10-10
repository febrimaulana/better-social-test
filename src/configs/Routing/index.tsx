import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FeedScreen, PostDetailScreen} from '@screens';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="post-detail"
          component={PostDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
