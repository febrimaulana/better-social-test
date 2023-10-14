import {TextAtom} from '@components';
import {ColorConstant} from '@constants';
import React from 'react';
import {ActivityIndicator, StyleProp, TouchableOpacity} from 'react-native';

interface ButtonProps {
  children: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  fontSize?: number;
  flex?: number;
  isLoading?: boolean;
  disabled?: boolean;
  padding?: number;
  borderRadius?: number;
  style?: StyleProp<any>;
}

const ButtonAtom = ({
  children,
  onPress,
  textColor = ColorConstant.grey.g1,
  backgroundColor = ColorConstant.blue.b8,
  borderWidth = 0,
  borderColor,
  fontSize,
  flex,
  isLoading = false,
  disabled = false,
  padding = 12,
  borderRadius = 8,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          backgroundColor,
          borderWidth,
          borderColor,
          flex,
          padding,
          borderRadius,
        },
        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator size="small" color={ColorConstant.grey.g1} />
      ) : (
        <TextAtom
          textAlign={'center'}
          fontSize={fontSize}
          color={textColor || ColorConstant.grey.g1}>
          {children}
        </TextAtom>
      )}
    </TouchableOpacity>
  );
};

export default ButtonAtom;
