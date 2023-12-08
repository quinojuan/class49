// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  );
};
