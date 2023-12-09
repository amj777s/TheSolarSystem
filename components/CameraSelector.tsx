import { useTheme } from '@react-navigation/native';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { button, headerFontWeight, headerSize, paragraphSize } from 'constants/GlobalStyles';
import { useState } from 'react';

export default function CameraSelector({
    cameras,
    setCamera,
    currentCamera

}: {
    cameras: string[],
    setCamera: (value: string) => void
    currentCamera: string,

}) {

    const { colors } = useTheme();
    const [isActive, setActive] = useState<boolean>(false);



    const handleCamera = (camera: string): void => {
        setCamera(camera);
        setActive(false);

    }

    let content;

    if (isActive) {
        content = cameras.map(camera => {
            return <Text key={camera} style={{ color: colors.primary, fontSize: paragraphSize }} onPress={() => handleCamera(camera)}>{camera}</Text>
        })

    } else {
        content = (
            <>
                <Text style={[{ color: colors.primary }, styles.title]}>{`Camera: ${currentCamera}`}</Text>
                <Pressable
                    onPress={() => setActive(true)}
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? button.bgPressed : button.bgUnPressed, borderRadius: button.borderRadius, padding: button.padding},
                        styles.button
                    ]}>
                    <Text style={{ color: colors.primary, fontSize: paragraphSize, textAlign: 'center'}}>Select Camera</Text>
                </Pressable>
            </>
        )
    }

    return (
        <View style={isActive? styles.ActiveContainer : styles.NonActiveContainer }>{content}</View>
    )
}

const styles = StyleSheet.create({
    NonActiveContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    ActiveContainer: {
        flexDirection: 'column',
        gap: 25,
        alignItems: 'center'
    },
    title: {
        fontWeight: headerFontWeight,
        fontSize: headerSize
    },
    button: {
        width: '33%'
    }
})