import React from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import AppTextInput from '.';
import {AppTextInputType, TextInputCtrlTypes} from './type';
const TextInputController: React.FC<AppTextInputType & TextInputCtrlTypes> = ({
  inputStyle,
  control,
  schemaName,
  defaultValue,
  ...props
}) => {
  const {
    field: {onChange, value, onBlur},
    fieldState: {error},
  } = useController({
    name: schemaName,
    control,
    defaultValue,
  });
  return (
    <View style={styles.container}>
      <AppTextInput
        inputStyle={inputStyle}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        {...props}
      />
      <Text style={styles.errorMsg}>{error?.message}</Text>
    </View>
  );
};

export default TextInputController;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  errorMsg: {
    color: 'red',
    fontSize: 10,
  },
});
