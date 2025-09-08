"use client"

import {Form, Input, InputProps} from "antd";
import {Control, Controller, Path} from "react-hook-form";
import React, {useState} from "react";

interface PhoneInputFieldProps<T extends AnyShape> extends InputProps {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
}

export const PhoneInputField = <T extends AnyShape>(
  {
    name,
    control,
    label,
    required = false,
    ...props
  }: PhoneInputFieldProps<T>) => {
  const [phoneValue, setPhoneValue] = useState('');

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');

    if (!numbers) return '';

    let formatted = '+996 ';

    if (numbers.length > 1) {
      const rest = numbers.slice(1);

      if (rest.length > 0) {
        formatted += '(' + rest.slice(0, 3);
      }
      if (rest.length > 3) {
        formatted += ') ' + rest.slice(3, 6);
      }
      if (rest.length > 6) {
        formatted += '-' + rest.slice(6, 8);
      }
      if (rest.length > 8) {
        formatted += '-' + rest.slice(8, 10);
      }
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const input = e.target.value;
    console.log(input)
    const formatted = formatPhoneNumber(input);
    setPhoneValue(formatted);
    const numbers = input.replace(/\D/g, '');
    onChange(numbers);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? 'Номер телефона обязателен' : false,
        validate: (value) => {
          if (!value) return true;
          const numbers = value.replace(/\D/g, '');
          return numbers.length === 12 || 'Номер телефона должен содержать 11 цифр';
        }
      }}
      render={({field, fieldState, formState}) => {
        const {onChange, ref, value, ...fieldProps} = field;
        const {error} = fieldState;
        const isSubmitting = formState.isSubmitting;
        const errorMessage = error?.message;
        const isError = Boolean(errorMessage);

        return (
          <Form.Item
            label={label}
            name={name as string}
            validateStatus={isError ? 'error' : ''}
            help={isError ? errorMessage : undefined}
            rules={required ? [{required: true, message: `${label} является обязательным полем`}] : undefined}>
            <Input
              {...props}
              {...fieldProps}
              value={phoneValue}
              onChange={(e) => handlePhoneChange(e, onChange)}
              ref={ref}
              type="tel"
              placeholder={'Введите номер телефона +996 505 573 575'}
              status={isError ? 'error' : undefined}
              disabled={isSubmitting}
              maxLength={13}
            />
          </Form.Item>
        );
      }}
    />
  );
};