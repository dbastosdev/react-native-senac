import { StyleSheet,FlatList, SafeAreaView, Text } from 'react-native';
import Card from './components/Card';

export default function App() {
  /**
   * Aqui ficarão os dados do card de produtos
   */
  const products = [
    {
      id: 1,
      name: "Beef Burger",
      calories: 70,
      price: 12.00,
      imagePath: "./assets/beef-burguer.png"
    },
    {
      id: 2,
      name: "Pancakes",
      calories: 60,
      price: 15.00,
      imagePath: "./assets/pancakes.png"
    }
  ]

  return (
    <SafeAreaView style={styles.container}>

      <FlatList style={styles.list}
        data = {products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <Card 
          name={item.name}
          calories={item.calories}
          price={item.price}
          imagePath={item.imagePath}
          />
        }
      />
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    width: 350
  }
});
