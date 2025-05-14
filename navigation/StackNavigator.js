import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import PerfilBarbaNegra from '../screens/PerfilBarbaNegra';

const Stack = createStackNavigator();

const StackNavigator = ({ isLoggedIn, onLogout }) => (
  <Stack.Navigator
    initialRouteName={isLoggedIn ? "Dashboard" : "Login"}
    screenOptions={{
      headerLeft: () => null,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: 'Login' }}
      initialParams={{ onLogin: onLogout }}
    />
    <Stack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{ title: 'Dashboard' }}
    />
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={{ title: 'Detalhes' }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Perfil' }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{ title: 'Editar Perfil' }}
    />
    <Stack.Screen
      name="PerfilBarbaNegra"
      component={PerfilBarbaNegra}
      options={{ title: 'Perfil Barba Negra' }}
    />
  </Stack.Navigator>
);

export default StackNavigator;
