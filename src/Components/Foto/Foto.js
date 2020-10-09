import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qntLike, curtirFoto, imgLike }) => {

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLike);

    const clicouCurtir = () =>{
        const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes);
        setLikes(qnt);
        setCurtiu(novoEstCurtiu);
    }

    return (
        <Fragment>
            
            <Image 
                source={{uri: urlFoto}}
                style={estilo.imagem}
            />
            
            <Text>{descricao}</Text>
            
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image 
                    source={imgLike(curtiu)} 
                    style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>Curtidas {likes}</Text>
            </View>
        
        </Fragment>
    )
};

export default Foto;