import { AuthStackParamList } from './AuthNavigator';

declare global {
  namespace ReactNavigation {
    interface AuthParamList extends AuthStackParamList {}
  }
}
