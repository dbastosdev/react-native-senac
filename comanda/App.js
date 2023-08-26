
/**
 * Aqui são os imports necessários à construção do componente.
 */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';

/**
 * Aqui fica de fato o componente.
 */

export default function App() {
  return (
    <View style={styles.main}>
      <Image style={styles.hero} source={require('./assets/home.png')} />

      <View style={styles.container}>
        <Text style={styles.title} >Sistema</Text>
        <Text style={styles.title} >Comanda</Text>
        
        <TextInput style={styles.input} placeholder='e-mail'/>
        <TextInput style={styles.input} placeholder='password' secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

/**
 * O arquivo abaixo descreve os estilos utilizados no componente.
 */

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative'
  },
  hero:{
    position: 'absolute',
    zIndex: 1,
    marginBottom: 20,
    height: 200 
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4,
    width: 200
  },
  button:{
    backgroundColor: '#121A2C',
    width: 200,
    paddingHorizontal: 48,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText:{
    color: '#FFBA26'
  }

});
