/**
 * 
 * ********************************************
 * 
 * Uma outra maneira é inserir o componente no seu respectivo pai usando
 * <Botao> texto </Botao>
 * E aqui recebemos o 'texto' como props.children
 * 
 * ex.: 
 * import Botao2 from './components/Botao2';
 * <Botao2>sair</Botao2>
 */

import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Botao2(props){
    return(
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})