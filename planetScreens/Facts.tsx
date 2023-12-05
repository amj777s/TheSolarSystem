
import PLANETINFOS from 'constants/PlanetFacts';
import { planet } from 'types';
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FactContainer from '@Components/FactContainer';
import { paragraphSpacing } from 'constants/GlobalStyles';

export default function Facts({route}: {route:any}) {
    const planet: planet = route.params.planet;
    const planetFacts = PLANETINFOS[planet];
    const insets = useSafeAreaInsets();
    const cssInsets = {  paddingBottom: insets.bottom, paddingLeft: insets.left,paddingRight: insets.right};


    return (
       <ScrollView style={[styles.container, cssInsets]} contentContainerStyle={styles.contentContainer}>
        {
            planetFacts.map(info => {
                return <FactContainer key={info.title} fact={info} />
            })
        }

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

