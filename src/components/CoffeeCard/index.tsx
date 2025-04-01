import { ShoppingCartSimple } from 'phosphor-react'
import {
  CardActions,
  CardButton,
  CardContainer,
  CardDescription,
  CardInput,
  CardTag,
  CardTitle,
  TagList,
} from './styles'
import { InputNumber } from '../InputNumber'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface CoffeeCardProps {
  id: string
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard({ id, imgUrl, tags, title, description, price }: CoffeeCardProps) {
  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)

  const { coffees, setCoffees, quantities, updateQuantity } = useContext(CartContext)

  function handleAddCoffeeToCart() {
    const coffee = coffees.find((item) => item.id === id)

    if (coffee) {
      const quantity = quantities[coffee.id]

      const updatedCoffees = coffees.map((item) => {
        if (item.id === id) {
          item.quantity += quantity
        }

        return item
      })

      setCoffees(updatedCoffees)
    } else {
      const newCoffee = {
        id,
        imgUrl,
        title,
        price,
        quantity: 1,
      }

      setCoffees((state) => [...state, newCoffee])
    }
  }

  return (
    <CardContainer>
      <img src={imgUrl} alt='Cafe expresso' />
      <TagList>
        {tags.map((tag) => (
          <CardTag key={tag}>{tag.toUpperCase()}</CardTag>
        ))}
      </TagList>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardInput>
        <label>
          <span>R$</span> {formatedPrice}
        </label>
        <CardActions>
          <InputNumber quantity={quantities[id] ? quantities[id] : 1} updateQuantity={updateQuantity} coffeeId={id}/>
          <CardButton onClick={handleAddCoffeeToCart}>
            <ShoppingCartSimple weight='fill' size={22} />
          </CardButton>
        </CardActions>
      </CardInput>
    </CardContainer>
  )
}
