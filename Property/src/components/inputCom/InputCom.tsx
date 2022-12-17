import { Input, InputProps } from '@rneui/themed';
import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import PF from '../../utils/PureFunction';

import Styles from './InputComStyles';

interface IInputCom extends InputProps {
    mainContainerStyle?: StyleProp<ViewStyle>,
    titleContainerStyle?: StyleProp<ViewStyle>,
    title?: string | undefined,
    titleTextStyle?: StyleProp<TextStyle>,
}


const InputCom = (props: IInputCom) => {
    return (
        <View style={[Styles.mainContainerStyle, props.mainContainerStyle]}>
            {PF.checkVariable(props.title ?? '', false) ?
                <View style={[Styles.titleContainerStyle, props.titleContainerStyle]}>
                    <Text style={[Styles.titleTextStyle, props.titleTextStyle]}>{props.title}</Text>
                </View>
                : null}
            <Input
                {...props}
                containerStyle={[Styles.containerStyle, props.containerStyle]}
                inputContainerStyle={[Styles.inputContainerStyle, props.inputContainerStyle]}
                inputStyle={[Styles.inputStyle, props.inputStyle]}
                renderErrorMessage={false}
            />
        </View>
    );
};

export default InputCom;
