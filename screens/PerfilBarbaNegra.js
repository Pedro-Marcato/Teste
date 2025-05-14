import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PerfilBarbaNegra = ({ onGoBack }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backButtonText}>Voltar ao Início</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'http://1.bp.blogspot.com/-nEw8d4occOU/UbC4bIQ6CNI/AAAAAAAAAIU/k-4SNWyaj0E/s1600/Barbanegra.jpg',
          }}
          style={styles.profileImage}
          blurRadius={2}
        />
        <Text style={styles.name}>Barba Negra</Text>
        <Text style={styles.detail}>Idade: 60 anos</Text>
        <Text style={styles.detail}>Ocupação: Pirataria</Text>
        <Text style={styles.description}>
          Capitão Edward Teach, também conhecido como Barba Negra, é o principal antagonista do filme de espadachim de fantasia de 2011 Piratas do Caribe: Navegando em Águas Misteriosas; a quarta parcela da série de filmes Piratas do Caribe da Disney.      </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexGrow: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  card: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 30,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 12,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  detail: {
    fontSize: 16,
    color: '#666',
    marginVertical: 2,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});

export default PerfilBarbaNegra;
