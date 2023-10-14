import React from 'react';
import {View} from 'react-native';

interface GapAtomProps {
  width?: number;
  height?: number;
}

const GapAtom = ({width = 0, height = 0}: GapAtomProps) => {
  return <View style={{width, height}} />;
};

export default GapAtom;
