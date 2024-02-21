import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage'
import CharactersPage from '../screens/CharactersPage'
const Stack = createStackNavigator();

function MyStack({episodes}) {
  return (
    <Stack.Navigator>
        
      <Stack.Screen name="Home" component={HomePage} initialParams={{ episodesData : episodes }} options={{title: 'Home', headerStyle: {
        backgroundColor : '#042361'
      }, headerTintColor: 'white' , headerTitleStyle : {
        fontWeight : 'bold'
      }}} />
   
     </Stack.Navigator>

  )
}
export default MyStack;