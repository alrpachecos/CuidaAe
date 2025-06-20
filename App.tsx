import 'react-native-url-polyfill/auto';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthNavigator} from './src/navigation/AuthNavigator';
import {RoleBasedNavigator} from './src/navigation/RoleBasedNavigator';
import {theme} from './src/theme/theme';
import {useAuthStore} from './src/store/useAuthStore';

const Navigation = () => {
  const {user} = useAuthStore();
  return user ? <RoleBasedNavigator user={user} /> : <AuthNavigator />;
};

function App(): React.JSX.Element {
  const {initialize} = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

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
