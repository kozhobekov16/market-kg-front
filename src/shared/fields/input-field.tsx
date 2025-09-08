"use client"

import React, {HTMLInputTypeAttribute} from 'react'
import {Control, Controller, Path} from "react-hook-form"
import {Form, Input, InputProps} from "antd"

interface InputFieldProps<T extends AnyShape> extends InputProps {
  name: Path<T>
  control: Control<T>
  type?: HTMLInputTypeAttribute
  label?: string
  required?: boolean
}

export const InputField = <T extends AnyShape>(
  {
    name,
    control,
    type,
    label,
    required = false,
    ...props
  }: InputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState, formState}) => {
        const {name: fieldName, onBlur, onChange, ref, value} = field
        const {invalid, error} = fieldState
        const isSubmitting = formState.isSubmitting
        const errorMessage = error?.message
        const isError = Boolean(errorMessage)
        const inputElement = (
          <Input
            {...props}
            value={value}
            type={type === 'number' ? 'number' : undefined}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            name={fieldName}
            status={isError ? 'error' : undefined}
            autoFocus={invalid}
            disabled={isSubmitting}
          />
        )

        return (
          <Form.Item
            label={label}
            name={fieldName}
            validateStatus={isError ? 'error' : ''}
            help={isError ? errorMessage : undefined}
            required={required}
            rules={required ? [{required: true, message: `${label} является обязательным полем`}] : undefined}
          >
            {inputElement}
          </Form.Item>
        )
      }}
    />
  )
}