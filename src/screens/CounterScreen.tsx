import {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: 10,
        }}>
        Contador: {contador}
      </Text>
      <Button title="+1" onPress={() => setContador(contador + 1)} />
      <Button title="-1" onPress={() => setContador(contador - 1)} />
    </View>
  );
};
