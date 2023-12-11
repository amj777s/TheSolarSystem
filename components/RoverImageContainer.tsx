import { View, Text, StyleSheet, Image, ActivityIndicator, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RoverImage } from 'types';

export default function RoverImageContainer({
    photos,
    isLoading
}: {
    photos: RoverImage[] | undefined,
    isLoading: boolean
}) {

    const { colors } = useTheme();
    const dimensions = useWindowDimensions();
    const width = dimensions.width; //keeps width of picture inside of scrollview boundaries


    let content;
    // // Change in RoverImageContainer as well
    if (isLoading) {
        content = (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    color='#0081f1'
                    size='large' />
                <Text style={{ color: colors.primary }}>Loading...</Text>
            </View>

        )
    } else {
        if (photos === undefined) {
            content = <Text></Text>
        } else if (photos[0].url === 'No Results Found...') {
            content = <Text style={{ color: colors.primary }}>{photos[0].url}</Text>
        } else {
            content = photos.map((photo, index) => {
                return <Image
                    key={index}
                    style={{ borderRadius: 45 }}
                    source={{ uri: photo.url }}
                    height={width * photo.imgRatio}
                    width={width}
                />
            })
        }

    }



    return (
        <View style={styles.container}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 25
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }
})