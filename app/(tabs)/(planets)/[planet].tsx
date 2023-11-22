import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overview from '../../../planetScreens/Overview';
import Facts from '../../../components/Facts';
import Exploration from '../../../components/Exploration';
import { useLocalSearchParams } from 'expo-router';
import { planet } from 'types';

const Tab = createMaterialTopTabNavigator();

export default function PlanetTabLayout(){
    
    const {planet}: {planet:planet} = useLocalSearchParams();
    
    return (
    <Tab.Navigator >
        <Tab.Screen name='overview' initialParams={{"planet": planet}} component={Overview}  />
        <Tab.Screen name='facts' initialParams={{"planet": planet}} component={Facts} />
        <Tab.Screen name='exploration' initialParams={{"planet": planet}} component={Exploration} />
    </Tab.Navigator>
    )

}