import React from "react"
import { Input } from "./styles"

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string
  gridArea: string
}

export function TextInput({ placeholder, gridArea, ...props }: TextInputProps) {
  return (
    <Input type="text" placeholder={placeholder} gridArea={gridArea} {...props} />
  )
}