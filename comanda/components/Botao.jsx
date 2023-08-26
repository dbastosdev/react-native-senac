/**
 * Esta será a estrutura de um componente. 
 * 
 * Extrairemos o Botão de App.js para que o mesmo vire um componente.
 * 
 * Um componente acaba sendo bastante versátil, pois pode ser customizado e replicado mais facilmente.
 * 
 * Será usado o 'props'para passar dados do componente pai para o componente filho
 * e dessa forma tornar o texto dentro do botáo controlado pelo componente pai. 
 *  
 * Aqui recebemos a props e no componente pai passamos a props texto
 * 
 * ********************************************
 * 
 * Uma outra maneira é inserir o componente no seu respectivo pai usando
 * <Botao> texto </Botao>
 * E aqui recebemos o 'texto' como props.children
 */

import { StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Botao(props){
    return(
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{props.texto}</Text>
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