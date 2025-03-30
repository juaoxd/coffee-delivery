import { ShoppingCartSimple } from "phosphor-react";
import { CardActions, CardButton, CardContainer, CardDescription, CardInput, CardTag, CardTitle, TagList } from "./styles";
import { InputNumber } from "../InputNumber";

interface CoffeeCardProps {
  imgUrl: string
  tags: string[]
  title: string
  description: string
}

export function CoffeeCard({ imgUrl, tags, title, description }: CoffeeCardProps) {
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
          <InputNumber />
          <CardButton>
            <ShoppingCartSimple weight="fill" size={22}/>
          </CardButton>
        </CardActions>
      </CardInput>
    </CardContainer>
  )
}