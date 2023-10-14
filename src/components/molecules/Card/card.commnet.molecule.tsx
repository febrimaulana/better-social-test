import {TextAtom} from '@components';
import {ColorConstant} from '@constants';
import {FeedCommentDto} from '@dtos';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface CardCommnetProps {
  data: FeedCommentDto;
}

const CardCommnetMolecule = ({data}: CardCommnetProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.user.image,
        }}
        style={styles.usetAvatar}
      />
      <View style={styles.conatinerCommnet}>
        <TextAtom
          fontSize={14}
          fontWeight="600"
          lineHeight={14.52}
          color={ColorConstant.grey.g11}>
          {data.user.name}
        </TextAtom>
        <TextAtom fontSize={14} lineHeight={19.36}>
          {data.comment}
        </TextAtom>
      </View>
    </View>
  );
};

export default CardCommnetMolecule;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 72,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  usetAvatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 16,
  },
  conatinerCommnet: {
    width: '90%',
  },
});
