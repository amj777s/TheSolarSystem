import { Stack } from "expo-router";

export default function PlanetSelectorNav() {
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
                    headerTitle: 'placeholder'
                }}
            />
        
        </Stack>
    )
}