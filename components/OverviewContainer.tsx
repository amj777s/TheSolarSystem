import { PlanetFact } from "types";
import { View, Image, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { headerFontWeight, headerSize, paragraphSize } from "constants/GlobalStyles";

export default function OverviewContainer({
    planetFact
}: {
    planetFact: PlanetFact
}) {

    const { colors } = useTheme();

    // Each container will be a picture with a title underneath centered in the middle of the screen and then below it, the fact
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={planetFact.img}
                    style={{ height: 150, width: 150, borderRadius: 150 }} />
                <Text style={[{ color: colors.primary }, styles.title]}>{planetFact.title}</Text>
            </View>
            <Text style={[{ color: colors.primary }, styles.fact]}>{planetFact.fact}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        gap: 10, 
        padding: 12
    },
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
        gap: 20
    },
    title: {
        fontWeight: headerFontWeight,
        fontSize: headerSize
    },
    fact: {
        fontSize: paragraphSize
    }
})