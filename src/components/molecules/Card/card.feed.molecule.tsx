import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  ICBack,
  ICBlock,
  ICComment,
  ICDownvoteInactive,
  ICShare,
  ICUpvoteActive,
} from '@assets';
import {LineAtom, TextAtom, TextMoreAtom} from '@components';
import {FeedDataDto} from '@dtos';

interface CardFeedProps {
  data: FeedDataDto;
  onPress?: () => void;
  onPressBack?: () => void;
  onPressDownvote?: () => void;
  onPressUpvote?: () => void;
  disabled?: boolean;
}

const CardFeedMolecule = ({
  data,
  onPress,
  onPressBack,
  onPressDownvote,
  onPressUpvote,
  disabled,
}: CardFeedProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.rowUser}>
        {onPressBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Image
              source={ICBack}
              height={18}
              width={18}
              style={styles.iconsMargin}
            />
          </TouchableOpacity>
        )}

        <Image
          source={{
            uri: data.user.image,
          }}
          style={styles.userImage}
        />
        <View style={styles.contentUser}>
          <TextAtom fontWeight="600">{data.user.name}</TextAtom>
          <TextAtom fontSize={12} lineHeight={18}>
            {data.post.date}
          </TextAtom>
        </View>
      </View>
      <LineAtom />
      <View>
        <TextMoreAtom style={styles.contentText} numberOfLines={3}>
          {data.post.content}
        </TextMoreAtom>
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
          <TextAtom style={styles.textCounter}>
            {data.post.total_comment}
          </TextAtom>
        </View>
        <View style={styles.contentButton}>
          <Image
            source={ICBlock}
            height={18}
            width={18}
            style={styles.iconsMargin}
          />
          <TouchableOpacity onPress={onPressDownvote}>
            <Image
              source={ICDownvoteInactive}
              height={18}
              width={18}
              style={styles.iconsMargin}
            />
          </TouchableOpacity>
          <TextAtom style={styles.textCounter}>{data.post.total_vote}</TextAtom>
          <TouchableOpacity onPress={onPressUpvote}>
            <Image source={ICUpvoteActive} height={18} width={18} />
          </TouchableOpacity>
        </View>
      </View>
      <LineAtom height={5} />
    </TouchableOpacity>
  );
};

export default CardFeedMolecule;

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
