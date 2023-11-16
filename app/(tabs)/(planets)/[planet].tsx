import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from '../../../components/Overview';
import Facts from '../../../components/Facts';
import Exploration from '../../../components/Exploration';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

const Tab = createMaterialTopTabNavigator();

export default function PlanetTabLayout(){
    
    const {planet}: {planet:string} = useLocalSearchParams();
    
    return (
    <Tab.Navigator >
        <Tab.Screen name='overview' initialParams={{"planet": planet}} component={Overview}  />
        <Tab.Screen name='facts' initialParams={{"planet": planet}} component={Facts} />
        <Tab.Screen name='exploration' initialParams={{"planet": planet}} component={Exploration} />
    </Tab.Navigator>
    )

}