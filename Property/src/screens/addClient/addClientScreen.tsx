import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native';
import MainButton from '../../components/MainButtonCom';
import HeaderCom from '../../components/headerCom';
import InputCom from '../../components/inputCom';
import STRINGS from '../../data/strings';
import { RootStackParamList } from '../../interface';
import GS from '../../utils/CommonStyles';
import Styles from './Styles';
import { Platform } from 'react-native';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: ScreenNavigationProp;
};

const AddClientScreen = ({ navigation }: Props) => {

  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [areaName, setAreaName] = useState('');
  const [areaCode, setAreaCode] = useState('');


  const onBackPress = () => {
    navigation.goBack();
  };

  const submitPress = () => {
    Alert.alert('Client added');
  };

  return (
    <KeyboardAvoidingView style={GS.flex} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View style={[GS.flex, GS.appBackground]}>
        <HeaderCom
          title="Add Client"
          showBack={true}
          handleBackPress={() => { onBackPress(); }}
          viewProfile={true}
          profile="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
        <SafeAreaView style={GS.flex}>
          <View style={GS.flex}>
            <ScrollView contentContainerStyle={GS.flexGrow}>
              <View style={GS.flex}>
                <InputCom
                  title={STRINGS.client.clientName}
                  value={clientName}
                  placeholder={STRINGS.client.clientNamePlaceHolder}
                  onChangeText={(text) => { setClientName(text); }}
                  errorMessage={''}
                  maxLength={100}
                  mainContainerStyle={Styles.inputMainContainer}
                />
                <InputCom
                  title={STRINGS.client.email}
                  value={email}
                  placeholder={STRINGS.client.emailPlaceHolder}
                  onChangeText={(text) => { setEmail(text); }}
                  keyboardType="email-address"
                  errorMessage={''}
                  maxLength={100}
                  mainContainerStyle={Styles.inputMainContainer}
                />
                <InputCom
                  title={STRINGS.client.phoneNumber}
                  value={phoneNumber}
                  placeholder={STRINGS.client.phoneNumberPlaceHolder}
                  onChangeText={(text) => { setPhoneNumber(text); }}
                  keyboardType="phone-pad"
                  errorMessage={''}
                  maxLength={100}
                  mainContainerStyle={Styles.inputMainContainer}
                />
                <InputCom
                  title={STRINGS.client.areaName}
                  value={areaName}
                  placeholder={STRINGS.client.areaNamePlaceHolder}
                  onChangeText={(text) => { setAreaName(text); }}
                  errorMessage={''}
                  maxLength={100}
                  mainContainerStyle={Styles.inputMainContainer}
                />
                <InputCom
                  title={STRINGS.client.areaCode}
                  value={areaCode}
                  placeholder={STRINGS.client.areaCodePlaceHolder}
                  onChangeText={(text) => { setAreaCode(text); }}
                  keyboardType="numeric"
                  errorMessage={''}
                  maxLength={100}
                  mainContainerStyle={Styles.inputMainContainer}
                />
                <InputCom
                  title={STRINGS.client.address}
                  value={address}
                  placeholder={STRINGS.client.addressPlaceHolder}
                  onChangeText={(text) => { setAddress(text); }}
                  errorMessage={''}
                  multiline={true}
                  maxLength={1000}
                  inputStyle={Styles.addressInputStyle}
                  inputContainerStyle={{}}
                  mainContainerStyle={[Styles.inputMainContainer]}
                />
              </View>
              <View>
                <MainButton
                  title={STRINGS.btnSubmit}
                  onPress={submitPress}
                  containerStyle={[Styles.submitButtonStyle]}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddClientScreen;
