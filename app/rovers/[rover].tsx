import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { rover } from "types";
import { paragraphSize, button, headerSize, headerFontWeight } from "constants/GlobalStyles";
import Cameras from "constants/Cameras";
import CameraSelector from "@Components/CameraSelector";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Rover() {
    const insets = useSafeAreaInsets();
    const cssInsets = { paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right };
    const { rover }: { rover: rover } = useLocalSearchParams();
    const cameras = Cameras[rover];
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


    return (
        <View style={[styles.container, cssInsets]}>
            <View style={styles.dateContainer}>
                <Text style={[{ color: colors.primary}, styles.title]}>{`Date: ${formattedDate}`}</Text>
                <Pressable
                    onPress={showDatepicker}
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? button.bgPressed : button.bgUnPressed, borderRadius: button.borderRadius, padding: button.padding },
                        styles.button
                    ]}>
                    <Text style={{ color: colors.primary, fontSize: paragraphSize, textAlign: 'center' }}>Select Date</Text>
                </Pressable>
            </View>
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
            <CameraSelector setCamera={setCamera} currentCamera={currentCamera} cameras={cameras} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        gap: 20

    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: headerSize,
        fontWeight: headerFontWeight,
    },
    button: {
        width: '33%'
    }
})
