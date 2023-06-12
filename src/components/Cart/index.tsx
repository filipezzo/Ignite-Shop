import * as Dialog from '@radix-ui/react-dialog'
import { CartButton } from "../CartButton";
import { CartClose, CartContent, CartFinal, CartProduct, CartProductDetails, CartProductImage, FinalDetails } from './styles';
import { X } from 'phosphor-react';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import axios from 'axios';

export function Cart(){
  const {cartItems, removeCartItem, cartTotal} = useCart()
  const cartQuantity = cartItems.length;

  const formattedCartTotal = new Intl.NumberFormat("en-US",{
    style: 'currency',
    currency: 'USD',
  }).format(cartTotal)

  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false)

  async function handleCheckout(){
    try{
      setIsLoadingCheckout(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const {checkoutUrl} = response.data

      window.location.href = checkoutUrl
    }catch(err){
      setIsLoadingCheckout(false)
      alert('fail')
    }
  }

  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
      <CartButton/>
      </Dialog.Trigger>
    
    <Dialog.Portal>
      <CartContent>
      <CartClose>
        <X size={24} weight='bold'/>
      </CartClose>
      <h2>Shopping bag</h2>
      <section>
        {cartQuantity <=0 && <p>Looks like your cart is empty :( </p> }

        {cartItems.map((item)=>(
            <CartProduct key={item.id}>
            <CartProductImage >
            <Image width={100} height={93} alt='' src={item.imageUrl}/>
            </CartProductImage>
            <CartProductDetails>
            <p>{item.name}</p>
            <strong>{item.price}</strong>
            <button onClick={()=> removeCartItem(item.id) }>Remove</button>
            </CartProductDetails>
          </CartProduct>
        ))}
       
      </section>

      <CartFinal>
        <FinalDetails>
          <div>
            <span>Quantity</span>
            <p>{cartQuantity} {cartQuantity === 1 ? 'item': 'itens'}</p>
          </div>

          <div>
            <span>Total</span>
            <p>{formattedCartTotal}</p>
          </div>
        </FinalDetails>
      <button onClick={handleCheckout}>Complete purchase</button>
      </CartFinal>
      </CartContent>
      
    </Dialog.Portal>
    </Dialog.Root>
  )
}