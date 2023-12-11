import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from '../../../planetScreens/Overview';
import Facts from '../../../planetScreens/Facts';
import Exploration from '../../../planetScreens/Exploration';
import { useLocalSearchParams } from 'expo-router';
import { planet } from 'types';
import { useTheme } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function PlanetTabLayout(){
    
    const {planet}: {planet:planet} = useLocalSearchParams();
    const {colors} = useTheme();
    
    return (
    <Tab.Navigator  screenOptions={{tabBarActiveTintColor: colors.primary}}>
        <Tab.Screen name='overview' initialParams={{"planet": planet}} component={Overview}  />
        <Tab.Screen name='facts' initialParams={{"planet": planet}} component={Facts} />
        <Tab.Screen name='exploration' initialParams={{"planet": planet}} component={Exploration} />
    </Tab.Navigator>
    )

}