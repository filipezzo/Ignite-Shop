import { HomeContainer } from "@/styles/pages/home"
import { useKeenSlider} from 'keen-slider/react'
import { Product } from "@/styles/pages/home"
import Image from "next/image"
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next"
import {stripe} from '../lib/stripe'
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { MouseEvent } from "react"
import { CartButton } from "@/components/CartButton"
import { useCart } from "@/hooks/useCart"
import { IProduct } from "@/contexts/CartContext"


interface HomeProps{
  products:IProduct[]
}

export default function Home({products}:HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 2.5,
      spacing: 48,
    }
  })

  const {addToCart, checkIfProductExists} = useCart()

  function handleAddToCart(e:MouseEvent<HTMLButtonElement>, product: IProduct){
    e.preventDefault()
    addToCart(product)
  }

  return (
    <>
    <Head>
      <title>Ignite Shop</title>
    </Head>
    <HomeContainer ref={sliderRef} className="keen-slider">

      {products.map(product =>{
        return(
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
    <Image
      src={product.imageUrl}
      width={520}
      height={480}
      alt=''/>

      <footer>
      <div>
        <strong>{product.name}</strong>
          <span>{product.price}</span>
      </div>
      <CartButton 
      color={"green"} 
      onClick={(e) => handleAddToCart(e, product)}
      disabled={checkIfProductExists(product.id)}
      />
      </footer>
      </Product>
      </Link>

        )
      })}
    </HomeContainer>
    </>
  )
}

export const getStaticProps : GetStaticProps = async ()=>{
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return{
      id: product.id,
      name: product.name, 
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount as number / 100),
      numberPrice: price.unit_amount/ 100,
      defaultPriceId: price.id,
    }
  })

  console.log(response.data)
  return {
  props: {
    products,
  }, 
  revalidate: 60*60*2,
}
}