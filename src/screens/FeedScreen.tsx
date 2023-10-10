import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {CardFeed} from '@components';

function FeedScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <CardFeed />
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;