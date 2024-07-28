import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { MyTextInputMask } from '../MyTextInputMask';

interface TextInputMaskControllerProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules?: any;
    placeholder?: string;
    style?: any;
    typeMask: string;
    secureTextEntry?: boolean;
}

export function TextInputMaskController<T extends FieldValues>({
    name,
    control,
    rules,
    placeholder,
    style,
    typeMask,
    secureTextEntry = false,
}: TextInputMaskControllerProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInputMask
                    style={style}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    type={typeMask}
                    secureTextEntry={secureTextEntry}
                />
            )}
        />
    );
}
