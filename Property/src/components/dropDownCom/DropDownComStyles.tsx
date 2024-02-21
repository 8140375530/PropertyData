import { StyleSheet } from 'react-native';
import COLORS from '../../data/colors';
import PF from '../../utils/PureFunction';
import GS from '../../utils/CommonStyles';

const Styles = StyleSheet.create({
  mainContainerStyle: {
    paddingHorizontal: 10,
  },
  titleTextStyle: {
    fontSize: PF.setValuesByDevice(15),
    color: COLORS.white,
  },
  containerStyle: {
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    minHeight: 42,
  },
  placeholderText: {
    color: '#FFFFFF77',
    fontSize: 18,
  },
  rightImageContainer: {
    height: PF.setValuesByDevice(15),
    width: PF.setValuesByDevice(15),
  },

  titleContainerStyle: {
    marginVertical: 5,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderColor: COLORS.white,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputStyle: {
    color: COLORS.white,
  },

});

export default Styles;
