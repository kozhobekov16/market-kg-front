"use client"

import React, {HTMLInputTypeAttribute} from 'react'
import {Control, Controller, Path} from "react-hook-form";
import {Input, InputProps} from "antd";

interface InputFieldProps<T extends AnyShape> extends InputProps {
  name: Path<T>
  control: Control<T>
  type?: HTMLInputTypeAttribute
}

export const InputField = <T extends AnyShape>({name, control, type, ...props}: InputFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState, formState}) => {
        const {name, onBlur, onChange, ref, value} = field
        const {invalid, error} = fieldState
        const isSubmitting = formState.isSubmitting
        const errorMessage = error?.message
        const isError = Boolean(errorMessage)
        switch (type) {
          case 'number':
            return (
              <Input
                {...props}
                value={value}
                type={'number'}
                onBlur={onBlur}
                onChange={onChange}
                ref={ref}
                name={name}
                status={isError ? 'error' : undefined}
                autoFocus={invalid}
                disabled={isSubmitting}
              />)
          default:
            return (
              <>
                <Input
                  {...props}
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  ref={ref}
                  name={name}
                  status={isError ? 'error' : undefined}
                  autoFocus={invalid}
                  disabled={isSubmitting}
                />
                {isError && (
                  <p className={'text-center text-red-600 mt-2 text-sm'}>
                    {errorMessage}
                  </p>
                )}
              </>
            )
        }
      }}
    />
  )
}