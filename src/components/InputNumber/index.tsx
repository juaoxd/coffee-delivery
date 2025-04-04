import { Minus, Plus } from 'phosphor-react'
import { Counter, InputButton } from './styles'

interface InputNumberProps {
  quantity: number
  coffeeId: string
  updateQuantity: (id: string, newQuantity: number) => void
}

export function InputNumber({ quantity, updateQuantity, coffeeId }: InputNumberProps) {
  function handleRemoveItem() {
    if (quantity === 1) {
      return 1
    }

    updateQuantity(coffeeId, quantity - 1)
  }

  function handleAddItem() {
    updateQuantity(coffeeId, quantity + 1)
  }

  return (
    <Counter>
      <InputButton onClick={handleRemoveItem}>
        <Minus size={12} weight='bold' />
      </InputButton>
      <span>{quantity}</span>
      <InputButton onClick={handleAddItem}>
        <Plus size={12} weight='bold' />
      </InputButton>
    </Counter>
  )
}
