import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

// Si tengo mas de un elemento el flex es compartido por los hijos.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    flexDirection: 'row'
  },
  caja1: {
    // flex: 5, // 5 + 3 + 2 = 10 (así que 5 es la mitad del total o sea, el 50%)
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#f0a23b",
    fontSize: 30
  },
  caja2: {
    // flex: 3,
    flex: 1,
    borderWidth: 2,
    backgroundColor: "#5856d6",
    borderColor: "white",
    fontSize: 30
  },
  caja3: {
    // flex: 2,
    flex: 1,
    borderWidth: 2,
    backgroundColor: "#28c4d9",
    borderColor: "white",
    fontSize: 30
  },
  
});
