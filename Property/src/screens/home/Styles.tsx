import { StyleSheet } from 'react-native';
import SIZES from '../../data/sizes';
import COLORS from '../../data/colors';
import GS from '../../utils/CommonStyles';

const Styles = StyleSheet.create({
  ListContentContainerStyle: {
    margin: 5,
  },
  itemViewStyle: {
    height: (SIZES.deviceWidth - 10) / 3,
    width: (SIZES.deviceWidth - 10) / 3,
    backgroundColor: COLORS.transparentBlack,
    borderWidth: 1,
    borderColor: COLORS.appBackground,
    minHeight: 20,
    ...GS.justifyCenter,
    ...GS.alignItemCenter,
  },
});

export default Styles;
