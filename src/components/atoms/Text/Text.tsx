import React from 'react';
import {StyleProp, Text as TextRN, TextStyle} from 'react-native';

interface TextProps {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'bold'
    | 'normal';
  lineHeight?: number;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

const Text = ({
  children,
  fontSize = 14,
  fontWeight = 'normal',
  lineHeight = 16.94,
  numberOfLines,
  style,
}: TextProps) => {
  return (
    <TextRN
      numberOfLines={numberOfLines}
      style={[{fontSize, fontWeight, lineHeight}, style]}>
      {children}
    </TextRN>
  );
};

export default Text;
