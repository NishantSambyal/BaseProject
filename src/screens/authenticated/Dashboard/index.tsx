import { SCREENS } from '@navigation/utility/screenConstants';
import useMyNavigation from '@navigation/utility/useMyNavigation';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Dashboard = () => {
  const navigation = useMyNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Success)}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ReduxSample)}>
        <Text>Redux Sample Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.ReactHookFormSample)}>
        <Text>Example Hook from</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
