import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { render, fireEvent } from '@testing-library/react-native';

import { theme } from '../../theme/theme';
import { Text } from '../Text/Text';

import { Header } from './Header';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Header', () => {
  it('should render correctly with title', () => {
    const { getByText } = renderWithTheme(<Header title="Título" />);
    expect(getByText('Título')).toBeTruthy();
  });

  it('should render back button when showBackButton is true', () => {
    const onBackPress = jest.fn();
    const { getByTestId } = renderWithTheme(
      <Header title="Título" showBackButton onBackPress={onBackPress} />,
    );
    const backButton = getByTestId('header-back-button');
    fireEvent.press(backButton);
    expect(onBackPress).toHaveBeenCalled();
  });

  it('should render right component when provided', () => {
    const rightComponent = <Text testID="right-component">Right</Text>;
    const { getByTestId } = renderWithTheme(
      <Header title="Título" rightComponent={rightComponent} />,
    );
    expect(getByTestId('right-component')).toBeTruthy();
  });
});
