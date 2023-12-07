import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  return (
    <View 
      style={[
        styles.fabLocation,
        position === 'br' ? styles.right : styles.left,
      ]}
    >
    <TouchableNativeFeedback
        onPress={onPress}
        background={ TouchableNativeFeedback.Ripple("#FFD59F", false, 30) }
        >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: "#FF7F00",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 3,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
});
