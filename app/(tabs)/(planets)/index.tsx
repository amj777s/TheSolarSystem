import {StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import PlanetSelector from '../../../components/PlanetSelector';
import planetImages from '../../../constants/PlanetImages';

const PLANETIMAGES = planetImages;

export default function HomeScreen() {
  
  const insets = useSafeAreaInsets();
  const cssInsets = {  paddingBottom: insets.bottom, paddingLeft: insets.left,paddingRight: insets.right};
  
  return (
    <ScrollView style={[styles.container, cssInsets]} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
      <PlanetSelector planet='mercury' srcImg={PLANETIMAGES.Mercury} />
      <PlanetSelector planet='venus' srcImg={PLANETIMAGES.Venus} />
      <PlanetSelector planet='earth' srcImg={PLANETIMAGES.Earth} />
      <PlanetSelector planet='mars' srcImg={PLANETIMAGES.Mars} />
      <PlanetSelector planet='jupiter' srcImg={PLANETIMAGES.Jupiter} />
      <PlanetSelector planet='saturn' srcImg={PLANETIMAGES.Saturn} />
      <PlanetSelector planet='neptune' srcImg={PLANETIMAGES.Neptune} />
      <PlanetSelector planet='uranus' srcImg={PLANETIMAGES.Uranus} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    gap: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
