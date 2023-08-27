import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CardList(props) {
   return (
        <SafeAreaView>
            <FlatList
                data = {props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                    <View style={styles.cardContainer}>
                        <View style={styles.productData}>
                            <Text style={styles.productTitle}>{item.name}</Text>
                            <Text style={styles.productCalories}><FontAwesome5 name="fire" size={18} color="black" /> {item.calories} Calories</Text>
                            <Text style={styles.productPrice}>$ {item.price}</Text>
                        </View>
                        <Image source={{ uri: item.path }} />
                    </View>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list:{
        width: 350
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 30,
        paddingLeft: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    productData:{
        flex: 2,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    productCalories:{
        marginTop: 5,
        fontSize: 18,
        color: 'grey'
    },
    productPrice:{
        marginTop: 5,
        fontWeight: 'bold',
        color: 'purple'
    }
});