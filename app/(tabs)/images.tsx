import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { headerFontWeight, headerSize, iconSize } from 'constants/GlobalStyles';

export default function TabTwoScreen() {

  const {colors} = useTheme();
  const insets = useSafeAreaInsets();
  const cssInsets = {  paddingBottom: insets.bottom, paddingLeft: insets.left,paddingRight: insets.right};

  return (
    <View style={[styles.container, cssInsets]}>
      <View style={styles.InfoContainer}>
        <Text style={[{color: colors.primary}, styles.title]}>Picture of the Day</Text>
        <Link href='/POTD' asChild>
        <Ionicons name = 'arrow-forward-circle' color={colors.primary} size={iconSize}/>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "green",
    borderWidth: 2
  },
  title: {
    fontSize: headerSize,
    fontWeight: headerFontWeight
  },
  InfoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: 2,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  }
});
