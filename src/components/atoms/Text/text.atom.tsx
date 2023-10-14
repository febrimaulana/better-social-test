import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

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
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  style?: StyleProp<TextStyle>;
}

const TextAtom = ({
  children,
  fontSize = 14,
  fontWeight = 'normal',
  lineHeight = 16.94,
  numberOfLines,
  textAlign = 'left',
  color,
  style,
}: TextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[{fontSize, fontWeight, lineHeight, textAlign, color}, style]}>
      {children}
    </Text>
  );
};

export default TextAtom;
