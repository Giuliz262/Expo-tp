import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';


import backgroundImage from '../assets/images/background.jpg';

const Index = () => {
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
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" type="font-awesome" color="#fff" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity>
              <Icon name="check-square" type="font-awesome" color="#fff" />
            </TouchableOpacity>
            <Text style={styles.optionText}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botonLogin}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
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
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  botonLoginTexto: {
    color: '#000',
    fontSize: 16,
  },
  inputRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resgistroTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Index;


