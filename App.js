import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <StackNavigator isLoggedIn={isLoggedIn} onLogout={handleLogout} onLogin={handleLogin} />
    </NavigationContainer>
  );
};

export default App;
