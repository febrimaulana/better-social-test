import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {FeedScreen, PostDetailScreen} from '@pages';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
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
  );
}

export default Routing;
