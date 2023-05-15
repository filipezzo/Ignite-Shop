import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}


export default function Success({costumerName, product}:SuccessProps){
  return(

    <> <Head>
      <title>Success Purchase | Ignite Shop</title>
    </Head>
    
      <SuccessContainer>
        <h1>Thank you for your purchase.</h1>
        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt=""/>
        </ImageContainer>

        <p>
          Woo-hoo, <strong>{costumerName}</strong> Your <strong>{product.name}</strong> is already on its way to your home.
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
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}