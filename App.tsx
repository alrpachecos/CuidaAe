import 'react-native-url-polyfill/auto';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './src/navigation/AppNavigator';
import {AuthNavigator} from './src/navigation/AuthNavigator';
import {theme} from './src/theme/theme';
import {useAuthStore} from './src/store/useAuthStore';

const Navigation = () => {
  const {user} = useAuthStore();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
