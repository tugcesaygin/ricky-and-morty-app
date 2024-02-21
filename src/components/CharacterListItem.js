import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

const CharacterListItem = (props) => {
    const { name, status, character, id , gender, image} = props
    const { item, nameprops, idCharacter, episodeprops, dateTextWrapper, episodeCard ,characterImage} = styles

    const [isFavorite, setIsFavorite] = useState(false);

    const handlePress = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <LinearGradient style={episodeCard}
            colors={['transparent', 'rgba(255,255,255,0.2)']}
            start={{ x: 0.5, y: 2 }}
            end={{ x: 0.4, y: 0.5 }}
        >
            <View style={item}>
               <Image source={{ uri: image }} style={styles.characterImage} />
                <View style={dateTextWrapper}>
                
                    <Text style={nameprops}>{name}</Text>
                    <Text style={episodeprops}>{character}</Text>
                    <Text style={idCharacter}>{id}</Text>
                    <Text style={gender}>{gender}</Text>
                    <Text style={status}>{status}</Text>
          

                </View>

                <View>
                    <TouchableOpacity onPress={handlePress}>
                        <FontAwesome
                            name={isFavorite ? 'heart' : 'heart-o'} 
                            size={24}
                            color={isFavorite ? 'red' : 'white'} 
                        />
                    </TouchableOpacity>
                </View>


            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        margin: 15,
        shadowColor: 'white',
        shadowOpacity: 0.2
    },
    idCharacter: {
        color: 'white',
        fontSize: 25,

    },
    gender: {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    },
    episodeprops: {
        color: 'white',
        fontSize: 20
    },
    episodeCard: {
        margin: 20,
        borderRadius: 20,
    },
    characterImage: {
        width: 120, // İstediğiniz genişlik ve yükseklikte ayarlayabilirsiniz
        height: 120,
        borderRadius: 25, // Dairesel resim yapmak için yarıçap ayarı
    }
})

export default CharacterListItem