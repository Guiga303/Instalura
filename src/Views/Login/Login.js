import AsyncStorage from '@react-native-community/async-storage';
import React, {Fragment, useState} from 'react';
import { 
    Text,
    TextInput,
    Button,
    View, 
    Platform, 
    StatusBar
} from "react-native";
import efetuarLogin from '../../api/login.js';
import estilo from './estilo.js';

const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    const tentarLogar = async () => {
        try{
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("instalura_token", token);
            navigation.replace("Feed", { nome: usuario });
        }catch(erro){
            setMensagemErro(erro.message);
        }
        
    };

  return (
      <Fragment>
          <View style={estilo.container}>
            <StatusBar
              backgroundColor="white"
              barStyle="dark-content"
            />
              <TextInput
                style={estilo.inputs}
                placeholder="Usuario"
                onChangeText={texto => setUsuario(texto)}
              />
              <TextInput
                style={estilo.inputs}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={texto => setSenha(texto)}
              />
              <Text>{mensagemErro}</Text>
          </View>
          
          <View style={estilo.botaoView}>
            <Button title="Entrar" onPress={tentarLogar}/>
          </View>
      </Fragment>
  )
};

Login.navigationOptions = () => {
  const opcoes = {
    title:"Login"
  }
  if(Platform.OS == "android"){
    opcoes.headerShown = false;
  }

  return opcoes;
}

export default Login;