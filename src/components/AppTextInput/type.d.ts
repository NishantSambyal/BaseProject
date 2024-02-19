import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface AppTextInputType {
  viewStyle?: ViewStyle;
  inputStyle?: TextStyle;
}

type UseControllerPropsNameType<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TName;

interface TextInputCtrlTypes extends TextInputProps {
  control?: Control<FieldValues, any> | any | undefined;
  schemaName?: UseControllerPropsNameType;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
}

interface AppTextInputProps extends TextInputProps {
  inputStyle?: TextStyle;
}
