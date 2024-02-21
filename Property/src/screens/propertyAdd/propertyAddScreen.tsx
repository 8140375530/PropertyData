import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';
import HeaderCom from '../../components/headerCom';
import GS from '../../utils/CommonStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../interface';
import InputCom from '../../components/inputCom';
import STRINGS from '../../data/strings';
import DropDownCom from '../../components/dropDownCom';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = { navigation: ScreenNavigationProp };

const PropertyAddScreen = ({ navigation }: Props) => {

    const [clientData, setClientData] = useState({});
    const [propertyTypeData, setPropertyTypeData] = useState({});
    const [propertyAreaData, setPropertyAreaData] = useState({});


    const onBackPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    const onClientDropdownPress = () => {
        Alert.alert('onClient selection');
    };

    return (
        <View style={[GS.flex, GS.appBackground]}>
            <HeaderCom
                title="Add Property"
                showBack={true}
                handleBackPress={() => { onBackPress(); }}
                viewProfile={true}
                profile="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
            <SafeAreaView style={GS.flex}>
                <View style={GS.flex}>
                    <ScrollView contentContainerStyle={GS.flexGrow} automaticallyAdjustKeyboardInsets={true}>
                        <View style={GS.flex}>
                            <DropDownCom
                                title={'Client'}
                                value=""
                                onPress={onClientDropdownPress}
                                placeHolder="Select you client" />
                            {/* <InputCom
                                title={STRINGS.client.clientName}
                                value={clientName}
                                placeholder={STRINGS.client.clientNamePlaceHolder}
                                onChangeText={(text) => { setClientName(text); }}
                                errorMessage={''}
                                maxLength={100}
                                mainContainerStyle={Styles.inputMainContainer}
                            /> */}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default PropertyAddScreen;
