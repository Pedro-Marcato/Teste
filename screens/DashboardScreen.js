import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PerfilBarbaNegra from './PerfilBarbaNegra';
import UsuariosGerais from './UsuariosGerais';

const DashboardScreen = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState('Dashboard');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fakeData = [
      { id: 1, name: 'Jack Spearrow' },
      { id: 2, name: 'Capitão Barbosa' },
      { id: 3, name: 'Davy Jones' },
      { id: 4, name: 'Will Turner' },
      { id: 5, name: 'Elizabeth Swann' },
      { id: 6, name: 'Angelica' },
      { id: 7, name: 'Barba Negra' },
    ];
    setPosts(fakeData);
    setLoading(false);
  }, []);

  if (currentScreen === 'PerfilBarbaNegra') {
    return <PerfilBarbaNegra onGoBack={() => setCurrentScreen('Dashboard')} />;
  }
  if (currentScreen === 'UsuariosGerais') {
    return <UsuariosGerais onGoBack={() => setCurrentScreen('Dashboard')} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Ionicons name="settings-sharp" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Menu Lateral</Text>
      </View>

      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Detail')}
          >
            <Text style={styles.menuText}>Detalhes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.menuText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.sectionTitle}>Nossos usuários:</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => {
              if (item.name === 'Barba Negra') {
                setCurrentScreen('PerfilBarbaNegra');
              } else {
                setCurrentScreen('UsuariosGerais');
              }
            }}
          >
            <Text style={styles.userText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  menu: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: '#999',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 6,
  },
  menuText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    color: '#222',
  },
  userItem: {
    backgroundColor: '#bbb',
    width: 260,
    padding: 10,
    borderRadius: 4,
    marginBottom: 8,
    alignItems: 'center',
  },
  userText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
});

export default DashboardScreen;
