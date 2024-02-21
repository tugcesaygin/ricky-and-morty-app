import React from 'react';
import { View, Text, FlatList, StyleSheet , StatusBar,SafeAreaView} from 'react-native';
import useGetEpisodes from '../hooks/useGetEpisodes';
import ListItem from '../components/ListItem'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';



const HomePage = ({episodesData}) => {
  const episodes = useGetEpisodes(episodes);  

  
  const renderItem = ({item}) => (
    <ListItem
    air_date={item.air_date}
    episode={item.episode}
    name={item.name}

  />
  )

  return (
    <LinearGradient
    colors={['#1B1A55','#9290C3']}
    style={styles.safeAreaGradient}
    start={{ x: 1, y: 0.2 }}
    end={{ x: 0.6, y: 0.8 }}
>
    <SafeAreaView style={styles.container}>

        <FlatList
          data={episodesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.air_date}
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
  
    nameprop: {
      color: 'white',
      fontSize: 20
    },
    air_date: {
      color: 'white',
      fontSize: 15
    },
    episodeprop: {
        color: 'white',
        fontSize: 15
      },
    safeAreaGradient: {
      flex: 1,
  },
  })

export default HomePage;
