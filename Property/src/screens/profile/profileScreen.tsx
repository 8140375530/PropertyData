import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import MainButton from '../../components/MainButtonCom';
import ImageCom from '../../components/imageCom';
import InputCom from '../../components/inputCom';
import IMAGES from '../../data/images';
import STRINGS from '../../data/strings';
import { RootStackParamList } from '../../interface';
import GS from '../../utils/CommonStyles';
import styles from './Styles';
import DropDownCom from '../../components/dropDownCom';
import HeaderCom from '../../components/headerCom';
import COLORS from '../../data/colors';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'homeScreen'>;

type Props = { navigation: ProfileScreenNavigationProp };

const ProfileScreen = ({ navigation }: Props) => {

    // const [username, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordShow, setPasswordShow] = useState(false);

    // const onPassEyePress = () => {
    //     setPasswordShow((prv) => !prv);
    // };

    // const loginPress = () => {
    //     navigation.navigate('homeScreen');
    //     console.log('loginPress');
    // };

    return (
        <View style={[GS.flex, GS.appBackground]}>
            <HeaderCom
                title="Profile"
                showBack={true}
                handleBackPress={() => navigation?.goBack()}
                viewProfile={false}
            />
            <View style={[GS.flex, GS.justifyCenter, GS.alignItemCenter]}>
                <Text style={{ color: COLORS.white }}>Profile Screen</Text>
            </View>
        </View>
    );
};



export default ProfileScreen;
