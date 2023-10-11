import {CardFeed} from '@components';
import {PostAction} from '@configs';
import {FeedDataDto} from '@dtos';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const FeedScreen = ({}) => {
  const post = useSelector((state: any) => state.post.post);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {post.map((item: FeedDataDto) => {
        return (
          <CardFeed
            key={item.id}
            data={item}
            onPress={() => navigation.push('post-detail', item)}
            onPressUpvote={() => dispatch(PostAction.incVote(item, post))}
            onPressDownvote={() => dispatch(PostAction.downVote(item, post))}
          />
        );
      })}
    </ScrollView>
  );
};

export default FeedScreen;
