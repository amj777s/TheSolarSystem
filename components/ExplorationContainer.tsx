import {useTheme } from '@react-navigation/native'
import { button, headerFontWeight, headerSize } from 'constants/GlobalStyles';
import {Text, View, Image, StyleSheet, Button, Pressable} from 'react-native'
import * as Linking from 'expo-linking';
import { PlanetStory } from 'types'
import { paragraphLineHeight, paragraphSize } from 'constants/GlobalStyles';

export default function ExplorationContainer({
    story
}:{
    story: PlanetStory
}) {

    const {colors} = useTheme();
    const blurbArray = story.blurb.split('\n').map(sentence => sentence.trim()); //fixes indentation issue in PlanetFacts
    const fixedBlurb = blurbArray.join(' ');
    return (
        <View style={styles.container}>
            <Text style={[styles.title,{color: colors.primary}]}>{story.title}</Text>
            <Image
                source={story.img}
                style={{width: 150, height: 150}} />
            <Text style={[{color: colors.primary}, styles.paragraph]}>{fixedBlurb}</Text>
            
            <Pressable
                onPress={()=> Linking.openURL(story.url)}
                style={({pressed})=>[
                    {backgroundColor: pressed? button.bgPressed : button.bgUnPressed , borderRadius: button.borderRadius, padding: button.padding}
                ]}>
                <Text style={{color: colors.primary,fontSize: paragraphSize}}>Read More...</Text>
            </Pressable>
        </View>
    )
        
}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 25,
        borderColor: 'red',
        borderWidth: 3
    },
    
    title: {
        fontWeight: headerFontWeight,
        fontSize: headerSize
    },
    paragraph: {
        fontSize: paragraphSize,
        lineHeight: paragraphLineHeight,
    },
    
})