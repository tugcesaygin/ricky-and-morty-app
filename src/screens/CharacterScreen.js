import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import useGetCharacters from '../hooks/useGetCharacters';
import ListItem from '../components/ListItem'
import { LinearGradient } from 'expo-linear-gradient'
import CharactersListItem from '../components/CharacterListItem'


const CharacterScreen = ({ characterData }) => {
    const characters = useGetCharacters(characters);


    const renderItem = ({ item }) => (
        <CharactersListItem
            name={item.name}
            gender={item.gender}
            status={item.status}
            image={item.image}
        />
    )

    return (
        <LinearGradient
            colors={['#1B1A55', '#9290C3']}
            style={styles.safeAreaGradient}
            start={{ x: 1, y: 0.2 }}
            end={{ x: 0.6, y: 0.8 }}
        >
            <SafeAreaView style={styles.container}>

                <FlatList
                    data={characterData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </SafeAreaView>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {

        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },

    name: {
        color: 'white',
        fontSize: 20
    },
    gender: {
        color: 'white',
        fontSize: 15
    },
    status: {
        color: 'white',
        fontSize: 15
    },
    safeAreaGradient: {
        flex: 1,
    },
})

export default CharacterScreen;
