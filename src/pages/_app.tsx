
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles()

import { Container} from '@/styles/pages/app'
import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <CartContextProvider>
      <Container>
      <Header/>
      <Component {...pageProps} />
      </Container>
  </CartContextProvider>
  )
}
