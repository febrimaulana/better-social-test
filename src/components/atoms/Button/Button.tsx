import {Text} from '@components';
import {colors} from '@constants';
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

const Button = ({
  children,
  onPress,
  textColor = colors.grey.g1,
  backgroundColor = colors.blue.b8,
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
        <ActivityIndicator size="small" color={colors.grey.g1} />
      ) : (
        <Text
          textAlign={'center'}
          fontSize={fontSize}
          color={textColor || colors.grey.g1}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
