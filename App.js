import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>o maior maior valor e </Text>
      <MinMax min="10" max="20" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
