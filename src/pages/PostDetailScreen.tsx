import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {Button, CardCommnet, CardFeed, InputCommnet, Line} from '@components';
import {PostAction} from '@configs';
import {colors} from '@constants';
import {FeedCommentDto, FeedDataDto} from '@dtos';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

const PostDetailScreen = () => {
  const post = useSelector((state: any) => state.post.post);
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const params = navigation.getState().routes[1].params as FeedDataDto;
  const userPost = post.find(
    (item: FeedDataDto) => item.id === params.id,
  ) as FeedDataDto;
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <CardFeed
          data={userPost}
          onPressBack={() => navigation.goBack()}
          onPressUpvote={() => dispatch(PostAction.incVote(userPost, post))}
          onPressDownvote={() => dispatch(PostAction.downVote(userPost, post))}
        />
        {userPost.commnets.map((item: FeedCommentDto) => (
          <CardCommnet key={item.id} data={item} />
        ))}
        <Line />
      </ScrollView>
      <View style={styles.containerInputComment}>
        <InputCommnet onChangeText={text => setInput(text)} value={input} />
        <Button
          onPress={() => {
            dispatch(PostAction.addComment(userPost, post, input));
            setInput('');
          }}>
          Comment
        </Button>
      </View>
    </View>
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
