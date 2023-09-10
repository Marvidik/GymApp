import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './Screen/OnboardingScreen';
import SignInScreen from './Screen/Authentications/SignInScreen';
import SignUpScreen from './Screen/Authentications/SignUpScreen';
import HomeScreen from './Screen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
