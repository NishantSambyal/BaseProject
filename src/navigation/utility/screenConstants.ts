import * as Component from '@screens/index';
import { RootStackProps } from './types';

export interface RoutesItem<T extends RootStackProps> {
  name: keyof T;
  component: T[keyof T];
}

export const SCREENS: RootStackProps = {
  Login: 'Login',
  Dashboard: 'Dashboard',
  Success: 'Success',
  ReduxSample: 'ReduxSample',
  ReactHookFormSample: 'ReactHookFormSample',
};

export const globalStackRoutes: RoutesItem<RootStackProps>[] = [
  {
    name: SCREENS.Success,
    component: Component.Success,
  },
];

export const authStackRoutes: RoutesItem<RootStackProps>[] = [
  {
    name: SCREENS.Login,
    component: Component.Login,
  },
  ...globalStackRoutes,
];

export const authenticatedStackRoutes: RoutesItem<RootStackProps>[] = [
  {
    name: SCREENS.Dashboard,
    component: Component.Dashboard,
  },
  {
    name: SCREENS.ReduxSample,
    component: Component.ReduxSample,
  },
  {
    name: SCREENS.ReactHookFormSample,
    component: Component.ReactHookFormSample,
  },
  ...globalStackRoutes,
];
