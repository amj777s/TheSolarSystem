import { useTheme } from '@react-navigation/native';
import { headerFontWeight, headerSize, paragraphSize } from 'constants/GlobalStyles';
import { Text, Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useSWR from 'swr';

async function getPOTD(url: string) {

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        let imgData: { ratio: number, url: string } = {} as { ratio: number, url: string };

        await Image.getSize(data.hdurl, (width, height) => {
            imgData = {
                ...imgData,
                ratio: height / width,
                url: data.hdurl
            }
        },
            error => alert(error)); //used to get height and with ratio of picture
        return {
            date: data.date,
            imgData: imgData,
            title: data.title,
            explanation: data.explanation
        }
    }
}

export default function POTD() {

    const insets = useSafeAreaInsets();
    const cssInsets = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right };
    const { colors } = useTheme();
    const dimensions = useWindowDimensions();
    const width = dimensions.width; //keeps width of picture inside of scrollview boundaries
    const { data, error, isLoading } = useSWR('https://api.nasa.gov/planetary/apod?api_key=KuoNCsCCqDgzNasZWeKoIbFhGeQvNiQEQC70owHn', getPOTD); //hide api key in future
    const height = data?.imgData.ratio ? data?.imgData.ratio * width : 0;

    if (error) {
        return <Text style={{ color: colors.primary }}>{error}</Text>
    }

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    color='#0081f1'
                    size='large' />
                <Text style={{ color: colors.primary }}>Loading...</Text>
            </View>

        )
    }


    return (
        <ScrollView style={[styles.container, cssInsets]} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            <Text style={[{ color: colors.primary }, styles.title]}>{data?.title}</Text>
            <Image
                width={width}
                height={height}
                source={{ uri: data?.imgData.url }}
            />
            <Text style={[{ color: colors.primary }, styles.paragraph]}>{data?.explanation}</Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15

    },
    contentContainer: {
        alignItems: 'center',
        gap: 15



    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: headerSize,
        fontWeight: headerFontWeight
    },
    paragraph: {
        fontSize: paragraphSize
    }
})