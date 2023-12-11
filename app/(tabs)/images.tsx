import { Link } from 'expo-router';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Text, View, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { headerFontWeight, headerSize, iconSize } from 'constants/GlobalStyles';

export default function TabTwoScreen() {

  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const polaroidHeight = 6 / 5 * width; //about the ratio of a p
  const insets = useSafeAreaInsets();
  const cssInsets = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right };

  return (
    <View style={[styles.container, cssInsets]}>
      <View style={[styles.polaroidContainer, { height: polaroidHeight, backgroundColor: colors.primary }]}>
        <View style={[styles.polaroidContentContainer, {backgroundColor: colors.background}]}>
          <View style={styles.InfoContainer}>
            <Text style={[{ color: colors.primary }, styles.title]}>Picture of the Day</Text>
            <Link href='/POTD' asChild>
              <Ionicons name='arrow-forward-circle' color={colors.primary} size={iconSize} />
            </Link>
          </View>
          <View style={styles.InfoContainer}>
            <Text style={[{ color: colors.primary }, styles.title]}>Spirit Rover Pictures</Text>
            <Link href={{ pathname: '/rovers/[rover]', params: { rover: 'spirit' } }} asChild>
              <Ionicons name='arrow-forward-circle' color={colors.primary} size={iconSize} />
            </Link>
          </View>
          <View style={styles.InfoContainer}>
            <Text style={[{ color: colors.primary }, styles.title]}>Curiosity Rover Pictures</Text>
            <Link href={{ pathname: '/rovers/[rover]', params: { rover: 'curiosity' } }} asChild>
              <Ionicons name='arrow-forward-circle' color={colors.primary} size={iconSize} />
            </Link>
          </View>
          <View style={styles.InfoContainer}>
            <Text style={[{ color: colors.primary }, styles.title]}>Opportunity Rover Pictures</Text>
            <Link href={{ pathname: '/rovers/[rover]', params: { rover: 'opportunity' } }} asChild>
              <Ionicons name='arrow-forward-circle' color={colors.primary} size={iconSize} />
            </Link>
          </View>
        </View>
        <View style={styles.polaroidInfo}>
          <Image
            source={require('../../assets/images/nasa-logo.webp')}
            style={{height:50, width:50}}
          />
          <Text style={[styles.title, {color: colors.text}]}>Mars Rovers</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: headerSize,
    fontWeight: headerFontWeight
  },
  polaroidContainer: {
    alignItems: 'center',
    width: '100%',
    paddingTop: '7.5%',
  },

  polaroidContentContainer: {
    width: '85%',
    height: '75%',
    justifyContent: 'center',
    gap: 50
  },
  polaroidInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: '8.5%'
  },
  InfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  }
});
