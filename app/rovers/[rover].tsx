import { Text, View, Pressable, Image, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { RoverImage, rover } from "types";
import { paragraphSize, button, headerSize, headerFontWeight } from "constants/GlobalStyles";
import Cameras from "constants/Cameras";
import CameraSelector from "@Components/CameraSelector";
import RoverImageContainer from "@Components/RoverImageContainer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Rover() {
    const insets = useSafeAreaInsets();
    const cssInsets = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right };
    const { rover }: { rover: rover } = useLocalSearchParams();
    const cameras = Cameras[rover];
    const [photos, setPhotos] = useState<RoverImage[] | undefined>();
    const [date, setDate] = useState<Date>(new Date());
    const [formattedDate, setFormattedDate] = useState<string>('01-01-2000');
    const [currentCamera, setCamera] = useState<string>("fhaz")
    const [showDate, setShowDate] = useState<boolean>(false);
    const { colors } = useTheme();

    useEffect(() => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const dateString = `${year}-${month}-${day}`;
        setFormattedDate(dateString);
    }, [date])

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {

        setShowDate(false);
        if (selectedDate) {
            setDate(selectedDate);
        }

    };


    const showDatepicker = () => {
        setShowDate(true);
    };


    const getImages = async (date: string, camera: string, rover: string) => {
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=KuoNCsCCqDgzNasZWeKoIbFhGeQvNiQEQC70owHn`;
        const response = await fetch(url);

        console.log(response.status);
        // handle future error codes
        if (response.ok) {
            const data = await response.json();
            

            if (data.photos.length > 0) {
                console.log('processing data');
                let photos = [] as RoverImage[];
                // fix by giving type

                for (const info of data.photos) {
                   
                    await Image.getSize(info.img_src, (width, height) => {
                        const ratio = height / width;

                        photos.push({ url: info.img_src, imgRatio: ratio } as RoverImage)
                    })
                }

                setPhotos(photos);
            }
            else {
                setPhotos([{ url: 'No Results Found...', imgRatio: 0 }]) // Change in RoverImageContainer as well
            }

        }
    }


    return (
        <ScrollView style={[styles.container, cssInsets]} contentContainerStyle={styles.contentContainer}>

            {/*Date Display*/}
            <View style={styles.dateContainer}>
                <Text style={[{ color: colors.primary }, styles.title]}>{`Date: ${formattedDate}`}</Text>
                <Pressable
                    onPress={showDatepicker}
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? button.bgPressed : button.bgUnPressed, borderRadius: button.borderRadius, padding: button.padding },
                        styles.button
                    ]}>
                    <Text style={{ color: colors.primary, fontSize: paragraphSize, textAlign: 'center' }}>Select Date</Text>
                </Pressable>

            </View>

            {/*Date Selector */}
            {showDate && (
                <DateTimePicker
                    testID="dateTimePicker"
                    display='spinner'
                    value={date}
                    mode='date'
                    is24Hour={true}
                    onChange={onChange}
                />
            )
            }

            {/* Camera Selector */}
            <CameraSelector setCamera={setCamera} currentCamera={currentCamera} cameras={cameras} />

            {/* Search Button */}
            <Pressable
                onPress={() => getImages(formattedDate, currentCamera, rover)}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? button.bgPressed : button.bgUnPressed, borderRadius: button.borderRadius, padding: button.padding },
                    styles.button, { marginHorizontal: 'auto' }
                ]}>
                <Text style={{ color: colors.primary, fontSize: paragraphSize, textAlign: 'center' }}>Search</Text>
            </Pressable>

            {/* Photo Container */}
            <RoverImageContainer photos={photos} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'red',

    },
    contentContainer: {
        alignItems: 'center',
        gap: 15,
        paddingBottom: 25
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    title: {
        fontSize: headerSize,
        fontWeight: headerFontWeight,
    },
    button: {
        width: '33%'
    }
})
