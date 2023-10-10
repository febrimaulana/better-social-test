import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CardFeed} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const JSONDummy = [
  {
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
  },
  {
    id: '2',
    user: {
      name: 'Maulana',
      image: 'https://picsum.photos/200',
    },
    post: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consecteturadipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      date: 'Mar 27, 2023',
      image: 'https://picsum.photos/200',
      total_comment: 0,
      total_vote: 0,
    },
  },
  {
    id: '3',
    user: {
      name: 'Yunus',
      image: 'https://picsum.photos/200',
    },
    post: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consecteturadipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      date: 'Mar 27, 2023',
      image: 'https://picsum.photos/200',
      total_comment: 0,
      total_vote: 0,
    },
  },
];

const FeedScreen = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {JSONDummy.map(item => {
          return (
            <CardFeed
              key={item.id}
              data={item}
              onPress={() => navigation.push('post-detail')}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
