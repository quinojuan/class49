import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284258',
justifyContent: 'space-between',
flexDirection: 'row'
    },
  cajaMorada: {
width: 100,
borderWidth: 10,
borderColor: 'white',
backgroundColor: '#5856D6',
},
cajaNaranja: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    
  },
  cajaAzul: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});
