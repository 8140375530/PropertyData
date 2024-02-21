import { ImageResizeMode, ImageSourcePropType, ImageStyle, ImageURISource, ViewStyle } from 'react-native';
import { StyleProp, TouchableOpacityProps } from 'react-native';
import { ResizeMode } from 'react-native-fast-image';

interface ImageComProps extends TouchableOpacityProps {
  styleContainer?: StyleProp<ViewStyle>,
  isLocal?: boolean,
  image: ImageSourcePropType | string,
  resizeMode?: ImageResizeMode | ResizeMode,
  defaultSource?: ImageURISource,
  imageStyle?: StyleProp<ImageStyle>,
}
export default ImageComProps;
