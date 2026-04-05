import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

const About = () => {
 
  const router = useRouter();
  return (
   <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About Page</Text>

      <Text style={styles.text}>
        This is a sample React Native Expo app with navigation.
      </Text>

      <Button title="Go Back Home" onPress={() => router.push('/')} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});