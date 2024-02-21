import { StyleSheet } from 'react-native';
import SIZES from '../../data/sizes';
import GS from '../../utils/CommonStyles';

const Styles = StyleSheet.create({
  inputMainContainer: {
    marginTop: 10,
  },
  addressInputStyle: {
    minHeight: 100,
    maxHeight: 200,
    marginVertical: 5,
  },
  submitButtonStyle: {
    ...GS.marginHorizontal,
    marginTop: 10,
    marginBottom: SIZES.isNotch ? 0 : 10,
  },
});

export default Styles;
