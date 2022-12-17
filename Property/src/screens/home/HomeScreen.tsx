import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import HeaderCom from '../../components/headerCom';

const HomeScreen = () => {
  return (
    <View>
      <HeaderCom
        title="Dashboard" />
      <SafeAreaView>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
