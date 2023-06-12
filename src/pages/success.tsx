import { stripe } from "@/lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  productsImages: string[]
}


export default function Success({costumerName, productsImages}:SuccessProps){
  return(

    <> <Head>
      <title>Success Purchase | Ignite Shop</title>
    </Head>
    
      <SuccessContainer>
        
        <ImagesContainer>
          
            {productsImages.map((image, i) =>(
              <ImageContainer key={i}>
              <Image  src={image} width={120} height={110} alt=""/>
              </ImageContainer>
            )
            
            )}
          

        </ImagesContainer>
        
        <h1>Thank you for your purchase.</h1>
        <p>
          Woo-hoo, <strong>{costumerName}</strong> Your  Purchase of {productsImages.length} items  is already on its way to your home.
        </p>

        <Link href='/'>
        Back to catalog
        </Link>
        
      </SuccessContainer>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
 if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item)=>{
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      costumerName,
      productsImages,
    }
  }
}