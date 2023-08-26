import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Beef Burger</Text>
                <Text>Beef Burger</Text>
                <Text>Beef Burger</Text>
            </View>
            

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