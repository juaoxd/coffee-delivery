import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { Counter, InputButton } from "./styles"

export function InputNumber() {
  const [quantity, setQuantity] = useState(1)
  
    function handleRemoveItem() {
      if (quantity === 1) {
        return 1
      }
  
      setQuantity(state => {
        return state - 1
      })
    }
  
    function handleAddItem() {
      setQuantity(state => {
        return state + 1
      })
    }

  return (
    <Counter>
      <InputButton onClick={handleRemoveItem}>
        <Minus size={12} weight="bold" />
      </InputButton>
      <span>{quantity}</span>
      <InputButton onClick={handleAddItem}>
        <Plus size={12} weight="bold" />
      </InputButton>
    </Counter>
  )
}