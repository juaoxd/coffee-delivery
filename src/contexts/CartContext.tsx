import { createContext, ReactNode, useState } from 'react'

interface Coffee {
  id: string
  imgUrl: string
  title: string
  price: number
  quantity: number
}

type Quantities = {
  [id: string]: number
}

interface Order {
  address: {
    cep: string | null
    street: string | null
    number: string | null
    fullAddress?: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
  }
  paymentMethod?: 'credit' | 'debit' | 'cash'
}

interface CartContextType {
  coffees: Coffee[]
  quantities: Quantities
  order: Order
  setOrder: React.Dispatch<React.SetStateAction<Order>>
  updateQuantity: (id: string, newQuantity: number) => void
  setCoffees: React.Dispatch<React.SetStateAction<Coffee[]>>
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [quantities, setQuantities] = useState<Quantities>({})
  const [order, setOrder] = useState<Order>({
    address: {
      cep: null,
      street: null,
      number: null,
      fullAddress: null,
      neighborhood: null,
      city: null,
      state: null,
    },
    paymentMethod: undefined,
  })

  function updateQuantity(id: string, newQuantity: number) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }))

    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => (coffee.id === id ? { ...coffee, quantity: newQuantity } : coffee))
    )
  }

  return (
    <CartContext.Provider value={{ coffees, setCoffees, quantities, updateQuantity, order, setOrder }}>{children}</CartContext.Provider>
  )
}
