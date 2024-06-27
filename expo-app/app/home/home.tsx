import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import eventsIcon from '../../assets/images/events-icon.png'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a tu Lista de Tareas</Text>
      <Image source={eventsIcon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain'
  },
});

export default HomeScreen