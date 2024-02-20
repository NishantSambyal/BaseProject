import { InputProps } from '../../../types/components.types';

export interface SampleFormBuilderProps {
  title?: string;
  subTitle?: string;
  inputs: InputProps[];
}

interface IFormInput {
  username: string;
  password: string;
}
