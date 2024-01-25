import { SCREENS } from '@navigation/utility/screenConstants';
import useNavigation from '@navigation/utility/useNavigation';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.Success)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
