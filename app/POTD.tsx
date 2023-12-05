import { useTheme } from '@react-navigation/native';
import { headerFontWeight, headerSize, paragraphSize } from 'constants/GlobalStyles';
import { Text, Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useSWR from 'swr';

async function getPOTD(url: string) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return {
            data: data.date,
            url: data.hdurl,
            title: data.title,
            explanation: data.explanation
        }
    }
}

export default function POTD() {
    const {colors} = useTheme();
    const { data, error, isLoading } = useSWR('https://api.nasa.gov/planetary/apod?api_key=KuoNCsCCqDgzNasZWeKoIbFhGeQvNiQEQC70owHn', getPOTD); //hide api key in future


    if (error) {
        return <Text style={{color: colors.primary}}>error</Text>
    }
    if (isLoading) {
        return <Text style={{color: colors.primary}}>Loading...</Text>
    }


    return (
        <View style={styles.container}>
            <Text style={[{color: colors.primary},styles.title]}>{data?.title}</Text>
            <Image
                style={{width: '100%', height: '50%', resizeMode:'cover', borderWidth: 1, borderColor: 'orange'}}
                src={data?.url}/>
            <Text style={[{color: colors.primary}, styles.paragraph]}>{data?.explanation}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        borderColor: 'red',
        borderWidth: 2
    },
    title: {
        fontSize: headerSize,
        fontWeight: headerFontWeight
    },
    paragraph: {
        fontSize: paragraphSize
    }
})