import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { buyPizza } from '../../redux/pizzaSlice';

export default function HomeScreen() {
  const pizzaCount = useSelector((state) => state.pizza.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🍕 Pizza Count: {pizzaCount}
      </Text>

      <Button
        title="Buy Pizza"
        onPress={() => dispatch(buyPizza())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});