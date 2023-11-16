
import {Tabs} from 'expo-router';
import {useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useTheme } from '@react-navigation/native';
import { planetHeaderHider } from '../../helpers/routeHeaderHider';

export default function TabLayout() {
  
  const colorScheme = useColorScheme(); 
  const {colors} = useTheme(); //use to change styles for light and dark mode

 
  return (
    <Tabs
      
      screenOptions={({route})=> {
        return {
          tabBarActiveTintColor: 'green',  //overides the ThemeProp primary color
          // tabBarStyle: {backgroundColor: 'white'} //set styles with use theme here
          headerTitleAlign: 'center',
          headerShown: planetHeaderHider(route) //used to remove PLANETS HEADER when viewing an individual planet,
          

        }
      }}>

      <Tabs.Screen
        name='(planets)'
        options={{
          tabBarLabel: 'Planets',
          title: 'PLANETS',
          tabBarIcon: () => <Ionicons name='planet' color='white' size={25} />,
          headerRight:() => <Ionicons name='settings-outline' color='white' size={25} /> //turn into a pressable with a link to a settings modal
        }} />
      <Tabs.Screen
        name='news'
        options={{
          tabBarLabel: 'News',
          title: 'NEWS',
          tabBarIcon: ()=> <Ionicons  name='book' color='white' size={25} />
        }} />

    </Tabs>
  );
}
