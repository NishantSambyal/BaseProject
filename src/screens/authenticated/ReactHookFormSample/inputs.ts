import * as yup from 'yup';
import { FormEnumType } from '../../../types/globalEnums';
import { SampleFormBuilderProps } from './types';

export const section: SampleFormBuilderProps = {
  inputs: [
    {
      label: 'Email',
      placeholder: 'Enter Email',
      schemaName: 'username',
      inputType: FormEnumType.TEXT_INPUT,
      // value: 'abc@example.com',
    },
    {
      label: 'Password',
      placeholder: 'Enter Password',
      schemaName: 'password',
      inputType: FormEnumType.TEXT_INPUT,
      // value: 'FAKEpwd13!',
      secureTextEntry: true,
      inputStyle: {
        height: 90,
        borderRadius: 12,
        borderTopLeftRadius: 12,
      },
    },
  ],
};

export const validations = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
