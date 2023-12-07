import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string
}

export const Fab = ({title}: Props) => {

  return (
    <TouchableOpacity
      onPress={() => console.log('Click')}
      style={styles.fabLocationBR}>
      <View style={styles.fab}>
        {/* Floating Action Button */}
        <Text style={styles.fabText}>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
