import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import MyDateInput from '../MyDateInput';

interface DateInputControllerProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules?: any;
    placeholder?: string;
    style?: any;
}

export function DateInputController<T extends FieldValues>({
    name,
    control,
    rules,
    placeholder, 
    style,
}: DateInputControllerProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <MyDateInput
                    style={style}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value || ''}
                />
            )}
        />
    );
}
