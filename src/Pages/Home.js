import React, {useState} from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default function Home(){
    
    let [valor, setValor] = useState();

    function Resultado(){
        
        let resto = valor % 2;

        if(resto == 0){
            alert("O número é par");
        }else {
            alert("o número é impar");
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Número Impar ou Par</Text>
            <TextInput onChangeText={setValor} style={styles.campo} placeholder="Digite um número"></TextInput>
            <TouchableOpacity style={styles.botao} onPress={Resultado}>
                <Text style={styles.botaoTexto}>Verificar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#003',
        color: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        borderRadius: 10
    },

    botao:{
        backgroundColor: '#003',
        alignItems: 'center',
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
    },

    botaoTexto:{
        color: 'red',
        fontSize: 17,
        fontWeight: 700,
    }
});