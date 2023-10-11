import {colors} from '@constants';
import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as TextRN,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

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
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

const TextMore = ({
  children,
  fontSize = 14,
  fontWeight = 'normal',
  lineHeight = 16.94,
  textAlign = 'left',
  color,
  numberOfLines = 0,
  style,
}: TextProps) => {
  const [line, setLine] = useState(0);
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={style}>
      <TextRN
        numberOfLines={showMore ? line : numberOfLines}
        onTextLayout={e => setLine(e.nativeEvent.lines.length)}
        style={{fontSize, fontWeight, lineHeight, textAlign, color}}>
        {children}
      </TextRN>
      {line > numberOfLines && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <TextRN style={styles.textMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </TextRN>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextMore;

const styles = StyleSheet.create({
  textMore: {
    color: colors.blue.b6,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 16.94,
    textAlign: 'center',
    marginTop: 5,
  },
});
