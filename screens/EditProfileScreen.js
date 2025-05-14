import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backButtonText}>Voltar ao Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Editar Perfil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    marginBottom: 250,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
