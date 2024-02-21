import { StyleSheet } from 'react-native';
import COLORS from '../../data/colors';
import PF from '../../utils/PureFunction';

const Styles = StyleSheet.create({
  mainContainerStyle: {
    paddingHorizontal: 10,
  },
  titleContainerStyle: {
    marginVertical: 5,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  titleTextStyle: {
    fontSize: PF.setValuesByDevice(15),
    color: COLORS.white,
  },
  inputStyle: {
    color: COLORS.white,
  },

});

export default Styles;
