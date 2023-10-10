import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const hs = (size: number) => (width / guidelineBaseWidth) * size; // horizontalScale
const vs = (size: number) => (height / guidelineBaseHeight) * size; // verticalScale
const ms = (size: number, factor = 0.5) => size + (hs(size) - size) * factor; // moderateScale

export {hs, vs, ms};
