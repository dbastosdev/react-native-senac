/**
 * Esta vai ser a segunda tela do app.
 * 
 * Diferente do App.js que é a porta de entrada da aplicação, aqui em app temos um item acessório.
 */

import { View } from "react-native";
// O react native já vem dotado de uma biblioteca de ícones padrão. vector/icons
// https://icons.expo.fyi/Index 
import { MaterialIcons } from '@expo/vector-icons'; 


export default function Comanda(){
    return(
        <View>
            <Text>Olá</Text>
            <MaterialIcons name="exit-to-app" size={24} color="black" />
        </View>
    )
}