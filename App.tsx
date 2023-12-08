import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "greenyellow"}}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
