import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {Box} from '../Box';
import {Text} from '../Text';
import {Icon} from '../Icon';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

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
              <Icon
                name="arrow-left"
                size={24}
                color={theme.colors.textPrimary}
              />
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
