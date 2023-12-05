import {StyleSheet} from 'react-native';
import { Link, useTheme } from '@react-navigation/native';
import PLANETSTORIES from 'constants/PlanetStories';
import { PlanetStory, planet } from 'types';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {paragraphSpacing } from 'constants/GlobalStyles';
import ExplorationContainer from '@Components/ExplorationContainer';

export default function Exploration({route}: {route:any}) {
    const {colors} = useTheme();
    const planet: planet = route.params.planet;
    const planetStories: PlanetStory [] = PLANETSTORIES[planet];
    const insets = useSafeAreaInsets();
    const cssInsets = {  paddingBottom: insets.bottom, paddingLeft: insets.left,paddingRight: insets.right};
    return (
       <ScrollView style={[styles.container, cssInsets]} contentContainerStyle={styles.contentContainer}>
            {planetStories.map((story) => <ExplorationContainer key={story.title} story={story}></ExplorationContainer>)}
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        gap: paragraphSpacing
    }
})