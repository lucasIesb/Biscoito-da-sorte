import React from 'react';
import { View, StyleSheet, StatusBar, Text} from 'react-native';
import BiscoitoDaSorte from './components/biscoito';

export default function App() {
  return (
    <View style={styles.container}>
  
       <Text>Biscoito Da Sorte</Text>

      <BiscoitoDaSorte></BiscoitoDaSorte>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
