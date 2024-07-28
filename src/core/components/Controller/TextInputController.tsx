import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { MyTextInput } from '../MyTextInput';

interface TextInputControllerProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules?: any;
    placeholder?: string;
    style?: any;
    secureTextEntry?: boolean;
}

export function TextInputController<T extends FieldValues>({
    name,
    control,
    rules,
    placeholder,
    style,
    secureTextEntry = false,
}: TextInputControllerProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                    style={style}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={secureTextEntry}
                />
            )}
        />
    );
}
