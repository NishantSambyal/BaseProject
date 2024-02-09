import * as yup from 'yup';
import { FormEnumType } from '../../../types/globalEnums';
import { SampleFormBuilderProps } from './types';

export const section: SampleFormBuilderProps = {
  inputs: [
    {
      label: 'Email',
      fieldPlaceholder: 'Enter Email',
      schemaName: 'username',
      inputType: FormEnumType.TEXT_INPUT,
      value: 'userinvestor@adxcloud.ae',
      // inputStyle: {
      //   height: 45,
      //   borderRadius: 12,
      //   borderTopLeftRadius: 12,
      // },
    },
    {
      label: 'Password',
      fieldPlaceholder: 'Enter Password',
      schemaName: 'password',
      inputType: FormEnumType.TEXT_INPUT,
      value: 'FAKEpwd13!',
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
