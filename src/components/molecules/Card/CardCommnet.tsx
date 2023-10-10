import {Text} from '@components';
import {colors} from '@constants';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface CardCommnetProps {
  data: {
    id: number | string;
    user: {
      name: string;
      image: string;
    };
    comment: string;
  };
}

const CardCommnet = ({data}: CardCommnetProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.user.image,
        }}
        style={styles.usetAvatar}
      />
      <View style={styles.conatinerCommnet}>
        <Text
          fontSize={14}
          fontWeight="600"
          lineHeight={14.52}
          color={colors.grey.g11}>
          {data.user.name}
        </Text>
        <Text fontSize={14} lineHeight={19.36}>
          {data.comment}
        </Text>
      </View>
    </View>
  );
};

export default CardCommnet;

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
