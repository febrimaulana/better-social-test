import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import {
  ICBack,
  ICBlock,
  ICComment,
  ICDownvoteInactive,
  ICShare,
  ICUpvoteActive,
} from '@assets';
import {Line, Text, TextMore} from '@components';

interface CardFeedProps {
  data: {
    id: string;
    user: {
      name: string;
      image: string;
    };
    post: {
      content: string;
      date: string;
      image: string;
      total_comment: number;
      total_vote: number;
    };
  };
  onPress?: () => void;
  onPressBack?: () => void;
}

const CardFeed = ({data, onPress, onPressBack}: CardFeedProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.rowUser}>
        {onPressBack && (
          <Pressable onPress={onPressBack}>
            <Image
              source={ICBack}
              height={18}
              width={18}
              style={styles.iconsMargin}
            />
          </Pressable>
        )}

        <Image
          source={{
            uri: data.user.image,
          }}
          style={styles.userImage}
        />
        <View style={styles.contentUser}>
          <Text fontWeight="600">{data.user.name}</Text>
          <Text fontSize={12} lineHeight={18}>
            Mar 27, 2023
          </Text>
        </View>
      </View>
      <Line />
      <View>
        <TextMore style={styles.contentText} numberOfLines={3}>
          {data.post.content}
        </TextMore>
        <Image
          source={{
            uri: data.post.image,
          }}
          height={200}
        />
      </View>
      <View style={styles.rowButton}>
        <View style={styles.contentButton}>
          <Image source={ICShare} height={18} width={18} />
          <Image
            source={ICComment}
            height={18}
            width={18}
            style={styles.iconsMargin}
          />
          <Text style={styles.textCounter}>{data.post.total_comment}</Text>
        </View>
        <View style={styles.contentButton}>
          <Image
            source={ICBlock}
            height={18}
            width={18}
            style={styles.iconsMargin}
          />
          <Pressable onPress={() => console.log('downvote')}>
            <Image
              source={ICDownvoteInactive}
              height={18}
              width={18}
              style={styles.iconsMargin}
            />
          </Pressable>
          <Text style={styles.textCounter}>{data.post.total_vote}</Text>
          <Pressable onPress={() => console.log('upvote')}>
            <Image source={ICUpvoteActive} height={18} width={18} />
          </Pressable>
        </View>
      </View>
      <Line height={5} />
    </Pressable>
  );
};

export default CardFeed;

const styles = StyleSheet.create({
  container: {},
  rowUser: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginLeft: 24,
  },
  contentUser: {
    marginLeft: 16,
  },
  contentText: {
    margin: 24,
  },
  rowButton: {
    flex: 1,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsMargin: {
    marginLeft: 24,
  },
  textCounter: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
});
