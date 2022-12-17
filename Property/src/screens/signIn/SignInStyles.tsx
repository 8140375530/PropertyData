import { StyleSheet } from 'react-native';
import SIZES from '../../data/sizes';
import GS from '../../utils/CommonStyles';

const styles = StyleSheet.create({
    ImageView: {
        ...GS.alignItemCenter,
        marginTop: 50,
    },
    PassMainContainerStyle: {
        marginTop: 5,
    },
    SignInButtonStyle: {
        ...GS.marginHorizontal,
        marginBottom: SIZES.isNotch ? 0 : 10,
    },
});

export default styles;
