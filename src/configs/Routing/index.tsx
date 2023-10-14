import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {FeedPage, PostDetailPage} from '@pages';

const Stack = createNativeStackNavigator();

function Routing() {
  return (
    <Stack.Navigator initialRouteName="feed">
      <Stack.Screen
        name="feed"
        component={FeedPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="post-detail"
        component={PostDetailPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Routing;
