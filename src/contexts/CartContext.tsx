
import { ReactNode, createContext, useState } from "react";

export interface IProduct{
  id: string
  name: string;
  imageUrl: string;
  price: String;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextData{
  cartItems: IProduct[]
  cartTotal: number
  addToCart: (product: IProduct) => void;
  removeCartItem: (productId: string) => void
  checkIfProductExists:(productId:string) => boolean;
}

interface CartContextProviderProps{
  children: ReactNode
  
}

export const CartContext = createContext( {} as CartContextData)

export function CartContextProvider({children}:CartContextProviderProps){
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  },0)

  function addToCart(product:IProduct){
    setCartItems((state)=> [...state, product ])
  }

  function removeCartItem(productId:string){
    setCartItems((state) => state.filter((item)=> 
    item.id !== productId
    ))
  }

  function checkIfProductExists(productId:string){
    return cartItems.some((product)=> product.id === productId)
  }

  return(
    <CartContext.Provider value={{cartItems,
      addToCart,
      checkIfProductExists,
      removeCartItem,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}