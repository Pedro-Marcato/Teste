import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const DetailScreen = () => {
  const navigation = useNavigation();

  const item = {
    title: 'Navio Pirata',
    image: 'https://i.pinimg.com/736x/b9/3a/27/b93a279d4fc62ed87b02c897a18c3304--movie-black-movie-wallpapers.jpg',
    description: 'Este é o Pérola Negra, navio\nutilizado em vários filmes da\nfranquia!',
    price: '$1.000.000,00',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backText}>Voltar ao Início</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>NOSSOS PRODUTOS</Text>

      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 60,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    marginTop: 21,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 50,
    alignItems: 'center',
    elevation: 3,
    marginTop: -14,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#6200ee',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailScreen;
