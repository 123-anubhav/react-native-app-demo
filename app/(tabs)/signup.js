import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Signup = () => {
    const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    console.log({ name, email });
    alert('Signup Successful!');
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Signup</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});