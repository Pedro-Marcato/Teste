import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConnection';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const docRef = doc(db, 'users', "1");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      } else {
        Alert.alert('Perfil não encontrado');
      }
    }, (error) => {
      console.error("Erro no onSnapshot:", error);
    });
    return () => unsubscribe();
  }, []);

  if (!profile) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleDeleteProfile = () => {
    Alert.alert(
      'Excluir Perfil',
      'Deseja realmente excluir seu perfil?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: () => {
            Alert.alert('Perfil excluído com sucesso!');
            navigation.navigate('Login');
          }
        }
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backButtonText}>Voltar ao Início</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ESSldcmTziYOMXb8l9DjjPGv2By6jFtWZw&s' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{profile.nome}</Text>
        <Text style={styles.detail}>Idade: {profile.idade || 'Não informado'}</Text>
        <Text style={styles.detail}>Ocupação: {profile.cargo || 'Não informada'}</Text>
        <Text style={styles.description}>
          Meu nome é {profile.nome} e este é o meu perfil.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteProfile}>
          <Text style={styles.buttonText}>Excluir Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    marginBottom: 20,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#ccc',
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
  buttonContainer: {
    width: '40%',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
