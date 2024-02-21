import { View, Text, TextStyle, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './DropDownComStyles';
import PF from '../../utils/PureFunction';
import GS from '../../utils/CommonStyles';
import ImageCom from '../imageCom';
import IMAGES from '../../data/images';
import ImageComProps from '../imageCom/ImageComProps';

interface IDropDownCom {
  mainContainerStyle?: StyleProp<ViewStyle>,
  titleContainerStyle?: StyleProp<ViewStyle>,
  title?: string | undefined,
  titleTextStyle?: StyleProp<TextStyle>,
  containerStyle?: StyleProp<ViewStyle>,
  value: string | undefined,
  placeHolder?: string | undefined,
  valueTextStyle?: StyleProp<TextStyle>,
  onPress?: () => void,
  imageProps?: ImageComProps
}

const DropDownCom = (props: IDropDownCom) => {
  return (
    <View style={[Styles.mainContainerStyle, props?.mainContainerStyle]}>
      {PF.checkVariable(props?.title ?? '', false) ?
        <View style={[Styles.titleContainerStyle, props?.titleContainerStyle]}>
          <Text style={[Styles.titleTextStyle, props?.titleTextStyle]}>{props?.title}</Text>
        </View>
        : null}
      <View style={[Styles.containerStyle, props?.containerStyle]}>
        <TouchableOpacity style={GS.flex} onPress={props?.onPress}>
          <View style={[GS.flex, GS.flexRow]}>
            <View style={[GS.flex, GS.justifyCenter]}>
              {PF.checkVariable(props?.value, false) ?
                <Text style={[props?.valueTextStyle]}>{PF.checkVariable(props?.value, true, true)}</Text> :
                <Text style={[Styles?.placeholderText]}>{PF.checkVariable(props?.placeHolder, true, true)}</Text>}
            </View>
            <View style={GS.justifyCenter}>
              <ImageCom
                isLocal={false}
                image={''}
                defaultSource={IMAGES.down}
                styleContainer={Styles.rightImageContainer}
                disabled={true}
                {...props?.imageProps}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDownCom;
