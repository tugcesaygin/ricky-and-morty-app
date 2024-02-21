import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import { Feather } from '@expo/vector-icons'
import CharacterScreen from '../screens/CharacterScreen'


const Tab = createBottomTabNavigator()

const Tabs = ({episodes, characters}) =>{
    console.log(episodes)
return(
    <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: '#070F2B',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#9290C3'
        },
        headerStyle: {
          backgroundColor: '#1B1A55'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        }
      }}

    >
        <Tab.Screen
            name= {'Home'}
            options={{
                tabBarIcon: ({focused}) =>(
                    <Feather 
                     name={'droplet'}
                     size={25}
                     color={focused? '#042361' : 'white'}
                     />
                )
            }}
        >
            {() => <HomePage episodesData={episodes} /> }
        </Tab.Screen>
       
       
        <Tab.Screen
            name= {'Characters'}
            options={{
                tabBarIcon: ({focused}) =>(
                    <Feather 
                     name={'droplet'}
                     size={25} 
                     color={focused? '#042361' : 'white'}
                     />
                )
            }}
        >
            {() => <CharacterScreen characterData={characters} /> }
        </Tab.Screen>
    
     
    </Tab.Navigator>
)

}

export default Tabs