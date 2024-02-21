import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import useGetEpisodes from './src/hooks/useGetEpisodes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/navigation/Tabs';
import useGetCharacters from './src/hooks/useGetCharacters';

const App = () => {
  const { episodes, loading: episodesLoading, error: episodesError } = useGetEpisodes();
  const { characters, loading: charactersLoading, error: charactersError } = useGetCharacters();

  const Tab = createBottomTabNavigator();

  if (episodesLoading || charactersLoading) { 
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#FEA1A1'} />
      </View>
    );
  }

  if (episodes) {
    return (
      <NavigationContainer>
        <Tabs episodes={episodes} characters={characters} /> 
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
