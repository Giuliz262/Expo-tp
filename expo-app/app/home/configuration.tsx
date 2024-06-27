import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ConfigurationScreen = () => {
  const navigation = useNavigation();

  const manejoSesion = () => {
    navigation.navigate('index')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Salir</Text>
      <TouchableOpacity style={styles.button} onPress={manejoSesion}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export default ConfigurationScreen;