import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from './useAppTheme';

export const useAppSafeArea = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    top: Math.max(top, spacing.spacing20),
    bottom: Math.max(bottom, spacing.spacing20),
  };
};
