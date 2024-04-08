import {ParamListBase} from '@react-navigation/native';

export interface RootParams extends ParamListBase {
  Login: {
    next?: string;
  };
  Support: {
    next?: string;
  };
}
