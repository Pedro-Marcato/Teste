import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConnection';

const LoginScreen = ({ route, navigation }) => {
  const [modoLogin, setModoLogin] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const handleLogin = async () => {
    if (!email.includes('@')) {
      Alert.alert('Email inválido', "O email deve conter '@'");
      return;
    }
    if (email && senha) {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, email, senha);
        Alert.alert('Login bem-sucedido!');
        route.params?.onLogin && route.params.onLogin();
        navigation.replace('Dashboard');
      } catch (error) {
        Alert.alert('Erro ao fazer login', error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos!');
    }
  };

  const handleRegister = async () => {
    if (!email.includes('@')) {
      Alert.alert('Email inválido', "O email deve conter '@'");
      return;
    }
    if (nome && email && senha) {
      try {
        setIsLoading(true);
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        await addDoc(collection(db, 'users'), {
          uid: userCredential.user.uid,
          nome: nome,
          email: email,
        });
        Alert.alert('Cadastro bem-sucedido!');
        setModoLogin(true);
        setNome('');
        setEmail('');
        setSenha('');
      } catch (error) {
        Alert.alert('Erro ao cadastrar', error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert('Erro', 'Os dados não são válidos!');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>{modoLogin ? 'Login' : 'Cadastro'}</Text>

      {!modoLogin && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>
      )}

      <Text style={styles.label}>Email:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          placeholder="Digite seu email"
        />
        <FontAwesome name="user" size={20} color="#333" />
      </View>

      <Text style={styles.label}>Senha:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
          placeholder="Digite sua senha"
        />
        <FontAwesome name="lock" size={20} color="#333" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={modoLogin ? handleLogin : handleRegister}
      >
        <Text style={styles.buttonText}>
          {modoLogin ? 'Login' : 'Cadastrar-se'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModoLogin(!modoLogin)}>
        <Text style={styles.switchText}>
          {modoLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Fazer login'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#e0e0e0',
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#aaa',
    padding: 14,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    marginBottom: 200,
    textAlign: 'center',
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#007bff',
  },
});

export default LoginScreen;
