import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import backgroundImage from '../assets/images/background.jpg';
import { useState } from 'react';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    setUsernameError('');
    setPasswordError('');

    let hasError = false;

    if (username.length < 5 || username.length > 10) {
      setUsernameError('El nombre de Usuario debe tener entre 5 y 10 caracteres.');
      hasError = true;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('La contraseña no debe ser menor de 5 caracteres. Debe contener por lo menos una letra mayúscula, una minúscula y un símbolo.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    Alert.alert('Success', 'Login successful!');
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <View style={styles.inputContainer}>
          <Icon name="user" type="font-awesome" color="#fff" />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError('');
            }}
          />
        </View>
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        <View style={styles.inputContainer}>
          <Icon name="lock" type="font-awesome" color="#fff" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError('');
            }}
          />
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <View style={styles.optionsContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              <Icon name={rememberMe ? "check-square" : "square-o"} type="font-awesome" color="#fff" />
            </TouchableOpacity>
            <Text style={styles.optionText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botonLogin} onPress={handleLogin}>
          <Text style={styles.botonLoginTexto}>Login</Text>
        </TouchableOpacity>

        <View style={styles.inputRegistro}>
          <Text style={styles.optionText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.resgistroTexto}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: .9,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, .2)',
    borderWidth: 1,
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    marginLeft: 10,
  },
  botonLogin: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  botonLoginTexto: {
    color: '#000',
    fontSize: 17,
  },
  inputRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resgistroTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});

export default LoginScreen;