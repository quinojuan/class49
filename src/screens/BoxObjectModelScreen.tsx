import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
      <Text style={styles.spaceUp}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    padding: 100,
  },

  title: {
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'brown',
    padding: 15,
    textAlign: 'center',
  },
  spaceUp: {
    marginTop: 15,
    color: 'black',
    alignSelf: 'center',
  },
});
