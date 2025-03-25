import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CardActions, CardButton, CardContainer, CardDescription, CardInput, CardTag, CardTitle, Counter, InputButton, NumberInput } from "./styles";
import cafeExpressoImg from '../../../../assets/expresso.svg'
import { useState } from "react";

export function CoffeeCard() {
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

  console.log(quantity)

  return (
    <CardContainer>
      <img src={cafeExpressoImg} alt="Cafe expresso" />
      <CardTag>TRADICIONAL</CardTag>
      <CardTitle>Expresso Tradicional</CardTitle>
      <CardDescription>O tradicional café feito com água quente e grãos moídos</CardDescription>
      <CardInput>
        <label>
          <span>R$</span> 9,90
        </label>
        <CardActions>
          <Counter>
            <InputButton onClick={handleRemoveItem}>
              <Minus size={12} weight="bold" />
            </InputButton>
            <NumberInput type="number" name="" id="" min={1} step={1} value={quantity}/>
            <InputButton onClick={handleAddItem}>
              <Plus size={12} weight="bold" />
            </InputButton>
          </Counter>
          <CardButton>
            <ShoppingCartSimple weight="fill" size={22}/>
          </CardButton>
        </CardActions>
      </CardInput>
    </CardContainer>
  )
}