import { StyleSheet } from 'react-native';
import COLORS from '../../data/colors';

import GS from '../../utils/CommonStyles';


const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: COLORS.purple,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  viewStyle: {
    ...GS.flex,
    ...GS.justifyCenter,
    ...GS.alignItemCenter,
  },
  textStyle: {
    ...GS.style_15_16,
    ...GS.textUpper,
    color: COLORS.white,
  },
});

export default styles;
