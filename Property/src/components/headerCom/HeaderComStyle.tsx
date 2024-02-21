import { StyleSheet } from 'react-native';
import COLORS from '../../data/colors';
import GS from '../../utils/CommonStyles';
import PF from '../../utils/PureFunction';

const styles = StyleSheet.create({
  container: {
    ...GS.flexRow,
    ...GS.flex,
    marginHorizontal: 15,
  },
  leftContainer: {
    ...GS.flex,
    ...GS.justifyCenter,
  },
  leftImageContainer: {
    ...GS.image40,
    ...GS.justifyCenter,
    ...GS.alignItemCenter,
  },
  centerContainer: {
    flex: 3,
    ...GS.justifyCenter,
    ...GS.alignItemCenter,
  },
  rightContainer: {
    ...GS.alignItemFlexEnd,
    ...GS.flex,
    ...GS.justifyCenter,
  },
  rightImageContainer: {
    height: PF.setValuesByDevice(28, 44, 36, 40),
    width: PF.setValuesByDevice(28, 44, 36, 40),
    borderRadius: PF.setValuesByDevice(28, 44, 36, 40),
    borderWidth: 1.5,
    borderColor: COLORS.white,
    overflow: 'hidden',
  },
  titleStyle: {
    ...GS.style_15_16,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default styles;
