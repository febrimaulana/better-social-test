import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {
  ButtonAtom,
  CardCommnetMolecule,
  CardFeedMolecule,
  GapAtom,
  InputCommnetAtom,
  LineAtom,
} from '@components';
import {PostAction} from '@configs';
import {ColorConstant} from '@constants';
import {FeedCommentDto, FeedDataDto} from '@dtos';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

const PostDetailOrganism = () => {
  const post = useSelector((state: any) => state.PostReducer.post);
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
        <CardFeedMolecule
          data={userPost}
          onPressBack={() => navigation.goBack()}
          onPressUpvote={() => dispatch(PostAction.incVote(userPost, post))}
          onPressDownvote={() => dispatch(PostAction.downVote(userPost, post))}
          disabled
        />
        {userPost.commnets.map((item: FeedCommentDto) => (
          <CardCommnetMolecule key={item.id} data={item} />
        ))}
        <LineAtom />
        <GapAtom height={100} />
      </ScrollView>
      <View style={styles.containerInputComment}>
        <InputCommnetAtom onChangeText={text => setInput(text)} value={input} />
        <ButtonAtom
          onPress={() => {
            dispatch(PostAction.addComment(userPost, post, input));
            setInput('');
          }}>
          Comment
        </ButtonAtom>
      </View>
    </View>
  );
};

export default PostDetailOrganism;

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
    backgroundColor: ColorConstant.grey.g1,
  },
});
