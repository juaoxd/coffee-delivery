import { Input } from "./styles"

interface TextInputProps {
  placeholder: string
  gridArea: string
}

export function TextInput({ placeholder, gridArea }: TextInputProps) {
  return (
    <Input type="text" placeholder={placeholder} gridArea={gridArea}/>
  )
}