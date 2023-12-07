import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <TouchableOpacity onPress={() => setContador(contador + 1)} style={styles.fabLocationBR}>
        <View style={styles.fab}>
          {/* Floating Action Button */}
          <Text style={ styles.fabText }>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setContador(contador - 1)} style={styles.fabLocationBL}>
        <View style={styles.fab}>
          {/* Floating Action Button */}
          <Text style={ styles.fabText }>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: 10,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center"

  },
  fabText: {
  color: "white",
  fontSize: 25,
  fontWeight: "bold",
alignSelf: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25
  }
});
