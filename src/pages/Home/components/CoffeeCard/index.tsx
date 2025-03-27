import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CardActions, CardButton, CardContainer, CardDescription, CardInput, CardTag, CardTitle, Counter, InputButton, NumberInput, TagList } from "./styles";
import { useState } from "react";

interface CoffeeCardProps {
  imgUrl: string
  tags: string[]
  title: string
  description: string
}

export function CoffeeCard({ imgUrl, tags, title, description }: CoffeeCardProps) {
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
    <CardContainer>
      <img src={imgUrl} alt="Cafe expresso" />
      <TagList>
        { tags.map((tag) => <CardTag>{tag.toUpperCase()}</CardTag>) }
      </TagList>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
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