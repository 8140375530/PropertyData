import { StyleSheet } from 'react-native';
import COLORS from '../../data/colors';

import GS from '../../utils/CommonStyles';

const styles = StyleSheet.create({
  container: {
    ...GS.flex,
    ...GS.justifyCenter,
    ...GS.alignItemCenter,
  },
  absoluteContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.transparentWhite,
  },
  text: {},
});

export default styles;
