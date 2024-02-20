import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppForm from '../../../components/hookForm/component';
import { section, validations } from './inputs';
import { IFormInput } from './types';

const ReactHookFormSample = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInput>({
    reValidateMode: 'onChange',
    resolver: yupResolver(validations),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = data =>
    alert(JSON.stringify(data, null, 8));

  return (
    <View style={styles.container}>
      <AppForm
        inputs={section.inputs}
        control={control}
      />

      <TouchableOpacity
        disabled={!isValid}
        style={[
          styles.button,
          { backgroundColor: !isValid ? 'lightgray' : 'blue' },
        ]}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReactHookFormSample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
