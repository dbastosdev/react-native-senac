import { StyleSheet,FlatList, SafeAreaView, Text } from 'react-native';
import CardList from './components/CardList';

export default function App() {
  /**
   * Aqui ficarão os dados do card de produtos
   */
  const products = [
    {
      id: 1,
      name: 'Beef Burger',
      calories: 70,
      price: 12.00,
      path: "../assets/1.png"
    },
    {
      id: 2,
      name: "Pancakes",
      calories: 60,
      price: 15.00,
      path: "../assets/2.png"
    }
  ]

  return (
    <CardList data={products}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
