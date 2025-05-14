import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UsuariosGerais = ({ onGoBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backButtonText}>Voltar ao Início</Text>
      </TouchableOpacity>

      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          ERRO!{'\n'} O perfil deste usuário não pode ser visualizado!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backButtonText: {
    marginTop: 5,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  errorContainer: {
    backgroundColor: '#fdecea',
    borderWidth: 1,
    borderColor: '#f5c6cb',
    borderRadius: 8,
    padding: 20,
    marginTop: 200,
    width: '100%',
  },
  errorText: {
    color: '#721c24',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UsuariosGerais;
