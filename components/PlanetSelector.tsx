import { useTheme } from "@react-navigation/native";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { Link } from 'expo-router';

export default function PlanetSelector({
    planet,
    srcImg

}: {
    planet: string,
    srcImg: any

}) {

    const { colors } = useTheme();


    return (
        <View style={styles.container}>
            <Image style={{ width: 150, height: 150 }} source={srcImg}></Image>
            <Text style={{ color: colors.primary }}>{planet}</Text>
            <Link href={{
                pathname: "/(tabs)/(planets)/[planet]",
                params: {planet: planet}
            }}
                asChild >
                <Button title="click me" />
            </Link>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        padding: 5,
        width: '100%',
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 20,
        borderStyle: 'dashed'
    }
});