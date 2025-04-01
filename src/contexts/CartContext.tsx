import { createContext, ReactNode, useState } from "react";

interface Coffee {
  id: string,
  imgUrl: string,
  title: string,
  price: number
  quantity: number
}

type Quantities = {
  [id: string]: number
}

interface CartContextType {
  coffees: Coffee[]
  quantities: Quantities
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


  function updateQuantity(id: string, newQuantity: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQuantity,
    }));
  }

  return (
    <CartContext.Provider value={{coffees, setCoffees, quantities, updateQuantity}}>
      {children}
    </CartContext.Provider>
  )
}
