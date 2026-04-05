import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Screen</Text>

      <Link href="/about" style={styles.link}>
        Go to About
      </Link>

      
      <Link href="/signup" style={styles.link}>
        Go to signup
      </Link>

      <Link href="/signup" style={styles.link}>
        Go to Signup
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    fontSize: 18,
    color: 'blue',
  },
});