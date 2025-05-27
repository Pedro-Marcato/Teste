import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConnection';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const docRef = doc(db, 'users', "1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setNome(data.nome || '');
          setIdade(data.idade || '');
          setCargo(data.cargo || '');
        } else {
          Alert.alert('Perfil não encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro ao carregar perfil', error.message);
      }
    };

    fetchProfile();
  }, []);

  async function handleSave() {
    if (!nome) {
      Alert.alert('O nome não pode estar vazio.');
      return;
    }
    setLoading(true);
    try {
      const docRef = doc(db, 'users', "1");
      await updateDoc(docRef, {
        nome: nome,
        idade: idade,
        cargo: cargo,
      });
      Alert.alert('Perfil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.log("Erro no updateDoc:", error.message);
      Alert.alert('Erro ao atualizar perfil', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name="arrow-back-circle-outline" size={30} color="#000" />
        <Text style={styles.backButtonText}>Voltar ao Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Editar Perfil</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
        placeholder="Digite seu cargo"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>
          {loading ? 'Salvando...' : 'Salvar Alterações'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 14,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
