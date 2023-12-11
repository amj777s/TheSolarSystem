import { useTheme } from "@react-navigation/native";
import { Stack, useLocalSearchParams } from "expo-router";

export default function PlanetSelectorNav() {

    const {planet}:{planet:string} = useLocalSearchParams();
    const {colors} = useTheme();
    
    return (
        <Stack initialRouteName="index" screenOptions= {{headerTitleAlign: 'center', headerTintColor: colors.primary}}>
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