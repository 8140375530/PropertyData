import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList } from 'native-base';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import HeaderCom from '../../components/headerCom';
import COLORS from '../../data/colors';
import { RootStackParamList } from '../../interface';
import GS from '../../utils/CommonStyles';
import Styles from './Styles';

interface IHomeDataObject {
  id: number,
  title: string,
  icon: string,
  navigation?: string,
}

const homeData: Array<IHomeDataObject> = [
  { id: 1, title: 'Add client', icon: '', navigation: 'addClientScreen' },
  { id: 2, title: 'Add Property', icon: '', navigation: 'propertyAddScreen' },
  { id: 3, title: 'Search', icon: '' },
  { id: 4, title: 'Settings', icon: '' },
  { id: 5, title: 'Leads', icon: '' },
  { id: 6, title: 'See All', icon: '' },
  { id: 7, title: 'Task To-do', icon: '' },
  { id: 8, title: 'Meetings', icon: '' },
  { id: 9, title: 'Billing', icon: '' },
  { id: 10, title: 'Tags', icon: '' },
  { id: 12, title: 'Bulk SMS', icon: '' },
  { id: 12, title: 'Bulk Email', icon: '' },
  { id: 13, title: 'Import', icon: '' },
  { id: 14, title: 'Groups', icon: '' },
  { id: 15, title: 'Birth days', icon: '' },
  { id: 16, title: 'ADV. Search', icon: '' },
  { id: 17, title: 'Backup', icon: '' },
  { id: 18, title: 'Restore', icon: '' },
  { id: 19, title: 'Export', icon: '' },
  { id: 20, title: 'Client Map', icon: '' },
  { id: 21, title: 'Website', icon: '' },
  { id: 22, title: 'Help', icon: '' },
  { id: 23, title: 'Share', icon: '' },
  { id: 24, title: 'about', icon: '' },
  { id: 25, title: 'Contact us', icon: '' },
];

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'addClientScreen'>;

type Props = { navigation: ScreenNavigationProp };

const HomeScreen = ({ navigation }: Props) => {

  const onItemPress = (item: IHomeDataObject) => {
    if (item?.navigation) {
      navigation.navigate(item?.navigation);
    }
  };

  const RenderItem = ({ item, index }: { item: IHomeDataObject, index: number }) => {
    return (
      <TouchableOpacity onPress={() => { onItemPress(item); }}>
        <View style={[Styles.itemViewStyle]}>
          <Text style={[{ color: COLORS.white, fontWeight: 'bold' }]}>{index}</Text>
          <Text style={[{ color: COLORS.white, fontWeight: 'bold', textTransform: 'uppercase' }]}>{item?.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[GS.flex, GS.appBackground]}>
      <HeaderCom
        title="Dashboard"
        showBack={false}
        viewProfile={true}
        handleProfilePress={()=>{navigation.navigate('profileScreen')}}
        profile="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
      <SafeAreaView style={[GS.flex]}>
        <FlatList
          data={homeData}
          numColumns={3}
          renderItem={RenderItem}
          contentContainerStyle={Styles.ListContentContainerStyle}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
