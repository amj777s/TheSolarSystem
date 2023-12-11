
import {Tabs} from 'expo-router';
import {useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useTheme } from '@react-navigation/native';
import { planetHeaderHider } from '../../helpers/routeHeaderHider';
import { iconSize } from 'constants/GlobalStyles';

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
          headerTintColor: colors.primary,
          headerShown: planetHeaderHider(route) //used to remove PLANETS HEADER when viewing an individual planet,
          

        }
      }}>

      <Tabs.Screen
        name='(planets)'
        options={{
          tabBarLabel: 'Planets',
          title: 'PLANETS',
  
          tabBarIcon: () => <Ionicons name='planet' color={colors.primary} size={iconSize} />,
          headerRight:() => <Ionicons name='settings-outline' color={colors.primary} size={iconSize} /> //turn into a pressable with a link to a settings modal
        }} />
      <Tabs.Screen
        name='images'
        options={{
          tabBarLabel: 'Images',
          title: 'IMAGES',
          tabBarIcon: ()=> <Ionicons  name='images-outline' color={colors.primary} size={iconSize} />
        }} />

    </Tabs>
  );
}
