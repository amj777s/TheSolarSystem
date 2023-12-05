import { PlanetInfo } from "types";
import { useTheme } from "@react-navigation/native";
import {View, Text, StyleSheet} from 'react-native';
import { headerSize, headerFontWeight, paragraphSize, paragraphLineHeight} from "constants/GlobalStyles";

export default function FactContainer({fact}: {fact: PlanetInfo}) {
    const {colors} = useTheme();
    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: colors.primary}]}>{fact.title}</Text>
            <View style={styles.paragraphContainer}>
                {fact.paragraphs.map((paragraph,index) => {
                    const paragraphArray = paragraph.split('\n').map(sentence => sentence.trim()); //fixes indentation issue in PlanetFacts
                    const correctedParagraph = paragraphArray.join(' ');
                    return <Text key={index} style={[styles.paragraph, {color: colors.primary}]} >{correctedParagraph}</Text>
                })}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 10,
        borderWidth: 2,
        borderColor: 'red'
    },
    title: {
        fontWeight: headerFontWeight,
        fontSize: headerSize
    },
    paragraphContainer: {
        flexDirection: 'column',
        gap: 25
    },
    paragraph: {
        fontSize: paragraphSize,
        lineHeight: paragraphLineHeight
    }
})