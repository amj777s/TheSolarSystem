import {View, Text} from 'react-native';
import {useTheme } from '@react-navigation/native';


export default function Overview({route}: {route:any}) {
    const {colors} = useTheme();
    const planet: string = route.params.planet;
    return (
        <View>
            
            <Text style={{color: colors.primary}}>{planet}</Text>
           
        </View>
    )
}