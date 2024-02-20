import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackProps = {
  Login: any;
  Dashboard: any;
  Success: any;
  ReduxSample: any;
  ReactHookFormSample: any;
};

export type ActivitiesStack = NativeStackNavigationProp<RootStackProps>;
