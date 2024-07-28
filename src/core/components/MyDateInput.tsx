import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, TextInputProps } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { MyTextInput } from './MyTextInput';

interface MyDateInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    style?: any;
}

const MyDateInput: React.FC<MyDateInputProps> = ({
    value,
    onChangeText,
    placeholder,
    style,
    ...props
}) => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const handleConfirm = (date: Date) => {
        date.setHours(0, 0, 0, 0);
        onChangeText(date.toString());
        setSelectedDate(formatDate(date));
        setShow(false);
    };

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0'),
            month = String(date.getMonth() + 1).padStart(2, '0'),
            year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const hideDatePicker = () => {
        setShow(false);
    };

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setShow(true)}>
                <View>
                    <MyTextInput
                        {...props}
                        value={selectedDate}
                        placeholder={placeholder}
                        style={style}
                        editable={false}
                    />
                </View>
            </TouchableWithoutFeedback>
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default MyDateInput;
