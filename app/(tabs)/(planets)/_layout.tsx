import { Stack, useLocalSearchParams } from "expo-router";

export default function PlanetSelectorNav() {

    const {planet}:{planet:string} = useLocalSearchParams();
    
    return (
        <Stack initialRouteName="index" screenOptions= {{headerTitleAlign: 'center'}}>
            <Stack.Screen 
                name="index"
                options={{
                    headerShown: false
                }}
                />
            <Stack.Screen
                name='[planet]'
                options={{
                    headerShown: true,
                    headerTitle: planet?.toUpperCase()
                }}
            />
        
        </Stack>
    )
}