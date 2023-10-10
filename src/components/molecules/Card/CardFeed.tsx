import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import {
  ICBlock,
  ICComment,
  ICDownvoteInactive,
  ICShare,
  ICUpvoteActive,
} from '@assets';
import {Line, Text} from '@components';

const CardFeed = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.rowUser}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={styles.userImage}
        />
        <View style={styles.contentUser}>
          <Text fontWeight="600">Usup Suparma</Text>
          <Text fontSize={12} lineHeight={18}>
            Mar 27, 2023
          </Text>
        </View>
      </View>
      <Line />
      <View>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
          in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur
          adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut
          tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac
          dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac
          dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit.
          Nulla luctus in ipsum ac dictum.
        </Text>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
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
          <Text style={styles.textCounter}>0</Text>
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
          <Text style={styles.textCounter}>0</Text>
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
