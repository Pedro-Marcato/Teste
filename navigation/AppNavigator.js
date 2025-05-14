import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from './StackNavigator';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = ({ isLoggedIn, onLogout }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#007AFF',
        drawerLabelStyle: { marginLeft: -10, fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          drawerLabel: 'Início',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: 'Perfil',
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={() => null}
        options={{
          drawerLabel: 'Sair',
          drawerIcon: ({ color }) => <MaterialIcons name="logout" size={22} color={color} />,
          headerShown: false,
          drawerItemStyle: { marginTop: 'auto' },
        }}
        listeners={{
          focus: () => {
            onLogout();
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
