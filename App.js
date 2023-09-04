import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './Screen/OnboardingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
