import React, { Fragment } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { AppTextInputProps } from './type';

const AppTextInput: React.FC<AppTextInputProps> = ({
  inputStyle,
  onChange,
  value,
  onBlur,
  ...props
}) => {
  return (
    <Fragment>
      <TextInput
        style={[styles.textInput, inputStyle]}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        {...props}
      />
    </Fragment>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
  },
});
