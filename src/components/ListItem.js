import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

const ListItem = (props) => {
    const { name, air_date, episode } = props
    const { item, nameprops, date, episodeprops, dateTextWrapper, episodeCard } = styles

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

                <View style={dateTextWrapper}>
                    <Text style={nameprops}>{name}</Text>
                    <Text style={episodeprops}>{episode}</Text>
                    <Text style={date}>{air_date}</Text>

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
    nameprops: {
        color: 'white',
        fontSize: 25,

    },
    date: {
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
    }
})

export default ListItem
