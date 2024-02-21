import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import MainButton from '../../components/MainButtonCom';
import ImageCom from '../../components/imageCom';
import InputCom from '../../components/inputCom';
import IMAGES from '../../data/images';
import STRINGS from '../../data/strings';
import { RootStackParamList } from '../../interface';
import GS from '../../utils/CommonStyles';
import styles from './Styles';
import DropDownCom from '../../components/dropDownCom';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'homeScreen'>;

type Props = { navigation: ProfileScreenNavigationProp };

const SignInScreen = ({ navigation }: Props) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);

    const onPassEyePress = () => {
        setPasswordShow((prv) => !prv);
    };

    const loginPress = () => {
        navigation.navigate('homeScreen');
        console.log('loginPress');
    };

    return (
        <SafeAreaView style={[GS.flex, GS.appBackground]}>
            <StatusBar barStyle={'light-content'} />
            <View style={[GS.flex, GS.appBackground]}>

                <ImageCom
                    image={IMAGES.House}
                    isLocal={true}
                    imageStyle={[GS.image100]}
                    styleContainer={[styles.ImageView]}
                />

                <View style={[GS.flex]}>
                    <View style={[GS.justifyCenter, GS.flex]}>
                        <InputCom
                            title={STRINGS.login.userName}
                            value={username}
                            placeholder={STRINGS.login.userNamePlaceHolder}
                            onChangeText={(text) => { setUserName(text); }}
                            errorMessage={''}
                            maxLength={100}
                        />
                        <InputCom
                            title={STRINGS.login.password}
                            value={password}
                            placeholder={STRINGS.login.passwordPlaceHolder}
                            onChangeText={(text) => { setPassword(text); }}
                            mainContainerStyle={[styles.PassMainContainerStyle]}
                            errorMessage={''}
                            secureTextEntry={!passwordShow}
                            maxLength={20}
                            rightIcon={
                                <ImageCom
                                    image={passwordShow ? IMAGES.eyeOpen : IMAGES.eyeClose}
                                    onPress={onPassEyePress}
                                />
                            }
                        />
                    </View>
                </View>
                <View>
                    <MainButton
                        title={STRINGS.btnSignIn}
                        onPress={loginPress}
                        containerStyle={[styles.SignInButtonStyle]}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};



export default SignInScreen;
