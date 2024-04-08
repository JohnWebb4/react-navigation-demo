import {ParamListBase} from '@react-navigation/native';

export interface RootParams extends ParamListBase {
  Login: {
    next?: string;
  };
  App: undefined;
  Support: {
    next?: string;
  };
}

export interface AppParams extends ParamListBase {
  Home: {
    next?: string;
    showConfetti?: boolean;
  };
  Devices: {
    next?: string;
  };
}
