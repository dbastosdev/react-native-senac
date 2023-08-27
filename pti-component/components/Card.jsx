import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Card(props) {
    console.log(props.imagePath)
   return (
         <View style={styles.cardContainer}>
            <View style={styles.productData}>
                <Text style={styles.productTitle}>{props.name}</Text>
                <Text style={styles.productCalories}><FontAwesome5 name="fire" size={18} color="black" /> {props.calories} Calories</Text>
                <Text style={styles.productPrice}>$ {props.price}</Text>
            </View>
            <Image style={styles.productImage} source={props.imagePath}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
    productImage: {
        flex: 1, 
        width: 60,
        height: 60
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