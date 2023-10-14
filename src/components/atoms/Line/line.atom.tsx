import {ColorConstant} from '@constants';
import React from 'react';
import {StyleProp, View, ViewProps} from 'react-native';

interface LineProps {
  height?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewProps>;
}

const LineAtom = ({
  height = 1,
  backgroundColor = ColorConstant.grey.g5,
  style,
}: LineProps) => {
  return <View style={[{height, backgroundColor}, style]} />;
};

export default LineAtom;
