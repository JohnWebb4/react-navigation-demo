import {ParamListBase} from '@react-navigation/native';

export interface RootParams extends ParamListBase {
  Stack: {
    next?: string;
  };
  Modal: {
    next?: string;
  };
}
