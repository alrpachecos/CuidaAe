import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Header} from './Header';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '../../theme/theme';
import {Text} from '../Text/Text';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Header', () => {
  it('should render correctly with title', () => {
    const {getByText} = renderWithTheme(<Header title="Título" />);
    expect(getByText('Título')).toBeTruthy();
  });

  it('should render back button when showBackButton is true', () => {
    const onBackPress = jest.fn();
    const {getByTestId} = renderWithTheme(
      <Header title="Título" showBackButton onBackPress={onBackPress} />,
    );
    const backButton = getByTestId('header-back-button');
    fireEvent.press(backButton);
    expect(onBackPress).toHaveBeenCalled();
  });

  it('should render right component when provided', () => {
    const rightComponent = <Text testID="right-component">Right</Text>;
    const {getByTestId} = renderWithTheme(
      <Header title="Título" rightComponent={rightComponent} />,
    );
    expect(getByTestId('right-component')).toBeTruthy();
  });
});
