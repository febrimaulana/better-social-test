import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Button, CardCommnet, CardFeed, InputCommnet, Line} from '@components';
import {colors} from '@constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const JSONDummy = {
  id: '1',
  user: {
    name: 'Febri Maulana Yunus',
    image: 'https://picsum.photos/200',
  },
  post: {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consecteturadipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
    date: 'Mar 27, 2023',
    image: 'https://picsum.photos/200',
    total_comment: 1,
    total_vote: 1,
  },
  commnets: [
    {
      id: 1,
      user: {
        name: 'Usup Suparma',
        image: 'https://picsum.photos/200',
      },
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
    },
  ],
};

const PostDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <CardFeed data={JSONDummy} onPressBack={() => navigation.goBack()} />
        {JSONDummy.commnets.map(item => (
          <CardCommnet key={item.id} data={item} />
        ))}
        <Line />
      </ScrollView>
      <View style={styles.containerInputComment}>
        <InputCommnet />
        <Button>Comment</Button>
      </View>
    </SafeAreaView>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
  },
  containerInputComment: {
    position: 'absolute',
    bottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
    backgroundColor: colors.grey.g1,
  },
});
