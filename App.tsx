import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {AuthProvider} from './src/contexts/AuthContext';
import {AppNavigator} from './src/navigation/AppNavigator';
import {AuthNavigator} from './src/navigation/AuthNavigator';
import {useAuth} from './src/hooks/useAuth';
import {theme} from './src/theme/theme';

const Navigation = () => {
  const {user} = useAuth();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
