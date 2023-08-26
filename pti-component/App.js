import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  /**
   * Aqui ficarão os dados do card de produtos
   */
  const products = [
    {
      name: "Beef Burger",
      calories: 70,
      price: 12.00
    },
    {
      name: "Pancakes",
      calories: 60,
      price: 15.00
    }
  ]
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
