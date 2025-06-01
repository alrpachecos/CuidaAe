import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconArrowBack from '../../assets/icons/icon-arrow-back.svg';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
}) => {
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView
      edges={['top']}
      style={{backgroundColor: theme.colors.background}}>
      <Box
        backgroundColor="background"
        paddingHorizontal="spacing16"
        paddingVertical="spacing12"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="backgroundHighlight">
        <Box flexDirection="row" alignItems="center" flex={1}>
          {showBackButton && (
            <TouchableOpacity
              onPress={onBackPress}
              testID="header-back-button"
              style={{marginRight: theme.spacing.spacing8}}>
              <IconArrowBack width={24} height={24} />
            </TouchableOpacity>
          )}
          <Text variant="heading3" numberOfLines={1}>
            {title}
          </Text>
        </Box>
        {rightComponent && <Box marginLeft="spacing16">{rightComponent}</Box>}
      </Box>
    </SafeAreaView>
  );
};
