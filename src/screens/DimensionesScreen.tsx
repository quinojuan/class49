import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

  const { width, height } = useWindowDimensions()
  
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text>
        W: {Math.floor(width)}, H: {Math.floor(height) }{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'brown',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});
