import { StyleSheet } from 'react-native';
import COLORS from '../data/colors';
import PF from './PureFunction';

const commonStyle = StyleSheet.create({
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },
  justifyCenter: { justifyContent: 'center' },
  alignItemCenter: { alignItems: 'center' },
  alignItemFlexEnd: { alignItems: 'flex-end' },
  textAlignCenter: { textAlign: 'center' },
  textUpper: { textTransform: 'uppercase' },
  textLower: { textTransform: 'lowercase' },
  textNone: { textTransform: 'none' },
  height100Per: { height: '100%' },
  width100Per: { width: '100%' },
  image100Per: { height: '100%', width: '100%' },
  marginHorizontal: { marginHorizontal: 16 },
  positionAbsolute: { ...StyleSheet.absoluteFillObject },
});

const styleText = StyleSheet.create({
  style_10_12: {
    ...commonStyle.textLower,
    fontSize: PF.setValuesByDevice(10, 10, 10, 8),
    lineHeight: PF.setValuesByDevice(12, 12, 12, 10),
    color: COLORS.black,
    // fontFamily: FONTS.R_G_REGULAR,
  },
  style_15_16: {
    fontSize: PF.setValuesByDevice(15, 15, 15, 13),
    lineHeight: PF.setValuesByDevice(16, 16, 16, 15),
    color: COLORS.black,
    // fontFamily: FONTS.R_G_REGULAR,
  },
  style_18_20: {
    fontSize: PF.setValuesByDevice(20, 20, 20, 18),
    lineHeight: PF.setValuesByDevice(22, 22, 22, 20),
    color: COLORS.black,
    // fontFamily: FONTS.R_G_REGULAR,
  },
  style_20_22: {
    fontSize: PF.setValuesByDevice(22, 22, 22, 20),
    lineHeight: PF.setValuesByDevice(22, 22, 22, 20),
    color: COLORS.black,
    // fontFamily: FONTS.R_G_REGULAR,
  },
});


const globalStyles = StyleSheet.create({
  ...commonStyle,
  ...styleText,
  appBackground: { backgroundColor: COLORS.appBackground },
  image20: { width: 20, height: 20 },
  image40: { width: 40, height: 40 },
  image100: { width: 100, height: 100 },
});

const GS = globalStyles;
export default GS;
