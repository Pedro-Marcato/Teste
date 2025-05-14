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
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = ({ route, navigation }) => {
  const [modoLogin, setModoLogin] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const aoLogar = () => {
    if (!email.includes('@')) {
      alert("Email inválido! O email deve conter '@'.");
      return;
    }
    if (email && senha) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert("Login bem-sucedido!");
        route.params.onLogin();
        navigation.replace('Dashboard');
      }, 5000);
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  const handleRegister = () => {
    if (!email.includes('@')) {
      alert("Email inválido! O email deve conter '@'.");
      return;
    }
    if (nome && email && senha) {
      alert("Cadastro bem-sucedido!");
      setModoLogin(true);
      setNome('');
      setEmail('');
      setSenha('');
    } else {
      alert("Os dados não são válidos!");
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
            onChangeText={setNome}
          />
        </View>
      )}

      <Text style={styles.label}>Email:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <FontAwesome name="user" size={20} color="#333" />
      </View>

      <Text style={styles.label}>Senha:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <FontAwesome name="lock" size={20} color="#333" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={modoLogin ? aoLogar : handleRegister}
      >
        <Text style={styles.buttonText}>
          {modoLogin ? 'Login' : 'Cadastrar-se'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModoLogin(!modoLogin)}>
        <Text style={styles.switchText}>
          {modoLogin ? 'Não tem conta? ' : 'Já tem conta? '}
          <Text style={styles.linkText}>
            {modoLogin ? 'Cadastre-se' : 'Fazer login'}
          </Text>
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
    margin: 100,
    padding: 14,
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
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
  linkText: {
    color: '#1E90FF',
    fontWeight: 'bold',
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
