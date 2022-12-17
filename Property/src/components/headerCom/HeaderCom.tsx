import { Box, HStack } from 'native-base';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import COLORS from '../../data/colors';
import IMAGES from '../../data/images';
import GS from '../../utils/CommonStyles';
import PF from '../../utils/PureFunction';
import ImageCom from '../imageCom';
import styles from './HeaderComStyle';


interface IProps {
  showBack?: boolean,
  showMenu?: boolean,
  viewProfile?: boolean,
  disabledLeftIcon?: boolean,
  disabledRightIcon?: boolean,
  profile: string | undefined,
  title: string | undefined,
  handleMenuPress: () => void,
  handleBackPress: () => void,
  handleProfilePress: () => void,
}

const DefaultProps = {
  showBack: true,
  showMenu: false,
  viewProfile: false,
  disabledLeftIcon: false,
  disabledRightIcon: false,
  profile: '',
  title: '',
  handleMenuPress: () => { },
  handleBackPress: () => { },
  handleProfilePress: () => { },
};


const HeaderCom = (props: IProps) => {
  const {
    showBack,
    showMenu,
    viewProfile,
    disabledLeftIcon,
    disabledRightIcon,
    title,
    profile,
    handleMenuPress,
    handleBackPress,
    handleProfilePress,
  } = props;
  const profilePic = PF.checkVariable(profile);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Box safeAreaTop bg={COLORS.black} />
      <HStack height={PF.setValuesByDevice(50)} bg={COLORS.black}>
        <View style={[styles.container]}>

          <View style={[styles.leftContainer]}>
            {(showBack || showMenu) &&
              <ImageCom
                isLocal={true}
                image={showMenu ? IMAGES.menu : IMAGES.left}
                defaultSource={IMAGES.user}
                styleContainer={[GS.image40, GS.justifyCenter, GS.alignItemCenter, {}]}
                imageStyle={[GS.image20]}
                onPress={showMenu ? handleMenuPress : handleBackPress}
                disabled={disabledLeftIcon}
              />
            }
          </View>

          {/* header center content */}
          <View style={[styles.centerContainer]}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>

          {/* header right content */}
          <View style={[styles.rightContainer]}>
            {viewProfile &&
              <ImageCom
                isLocal={false}
                image={profilePic}
                defaultSource={IMAGES.user}
                styleContainer={styles.rightImageContainer}
                onPress={handleProfilePress}
                disabled={disabledRightIcon}
              />
            }
          </View>
        </View>
      </HStack>
    </>
  );
};

HeaderCom.defaultProps = DefaultProps;

export default HeaderCom;
