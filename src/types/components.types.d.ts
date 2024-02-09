import { AppTextInputType } from '../components/AppTextInput/type';
import { FormEnumType } from './globalEnums';

export interface AppFormProps {
  inputs: InputProps[];
  control: Control<FieldValues, any> | any | undefined;
  //   setValue?: any;
  //   updateData?: any;
  //   onChange?: any;
  //   handleCheckbox?: any;
  //   formValues?: any;
  //   setError?: any;
  //   outsideIconEvent?: any;
  //   textInputViewStyle?: ViewStyle;
  //   allValidationMessages?: {
  //     [key: string]: {key: string; tip: string}[];
  //   };
}

export type ComponentType = ['textInput', 'checkbox'];
export interface InputProps extends AppTextInputType {
  label: string;
  fieldPlaceholder?: string;
  schemaName?: string;
  inputType: FormEnumType;
  value?: string;
  items?: ItemProps[];
  hidden?: boolean;
  readOnly?: boolean;
}
