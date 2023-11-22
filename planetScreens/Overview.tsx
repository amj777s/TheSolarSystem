import {View, Text, StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import PLANETFACTS from 'constants/PlanetOverview';
import { PlanetFact, planet } from 'types';
import FactContainer from '@Components/FactContainer';


export default function Overview({route}: {route:any}) {
    const planet: planet = route.params.planet;
    const PlanetFacts:PlanetFact [] = PLANETFACTS[planet];

    const insets = useSafeAreaInsets();
    const cssInsets = {  paddingBottom: insets.bottom, paddingLeft: insets.left,paddingRight: insets.right};
  
    return (
        <ScrollView style={[styles.container, cssInsets]} contentContainerStyle={styles.contentContainer}>
            {PlanetFacts.map(info => {
                return <FactContainer key={info.title} planetFact={info}/>
            })}
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        gap: 50
    }
})