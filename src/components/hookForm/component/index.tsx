import React from 'react';
import {Text, View} from 'react-native';
import {AppFormProps, InputProps} from '../../../types/components.types';
import {FormEnumType} from '../../../types/globalEnums';
import TextInputController from '../../AppTextInput/TextInputController';

const AppForm: React.FC<AppFormProps> = ({inputs, control}) => {
  return (
    <View>
      {!!inputs &&
        inputs.map(
          (
            {
              label,
              inputType,
              schemaName,
              fieldPlaceholder,
              inputStyle,
              value,
            }: InputProps,
            index: number,
          ) => (
            <View key={index}>
              <Text>{label}</Text>
              {inputType === FormEnumType.TEXT_INPUT && (
                <TextInputController
                  defaultValue={value}
                  schemaName={schemaName}
                  control={control}
                  placeholder={fieldPlaceholder}
                  inputStyle={inputStyle}
                />
              )}
            </View>
          ),
        )}
    </View>
  );
};

export default AppForm;
