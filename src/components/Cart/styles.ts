import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog"

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',
  display:  'flex',
  flexDirection: 'column',

  h2:{
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '>section' : {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    overflowY: 'auto',
    flex: 1,
  },
})


export const CartClose = styled(Dialog.Close,{
  color: '$gray500',
  background: 'none',
  border: 0,
  alignSelf: 'flex-end',
} )


export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.8125rem',
})

export const CartProductImage = styled("div", {
  width: '6.37125rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent : 'center',
  borderRadius: 8,

    img: {
      objectFit: 'cover',
    }

})

export const  CartProductDetails = styled("div", {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  p:{
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    marginTop: 4,
    fontSize: '$md',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    color: '$green500',
    border: 0,
    background: 'none',
    alignSelf: 'flex-start',
    
  }

  
})

export const CartFinal = styled("div", {
  display	: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button:{
    width: '100%',
    height: '4.3125rem',
    background: '$green500',
    color: '$white',
    fontSize: '$md',
    padding: '1.25rem',
    borderRadius: 8,
    border:'none',
    fontWeight: 700,

    '&:disabled':{
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(disabled):hover':{
      background: '$green300',
    }
  }
})


export const FinalDetails = styled("section", {
  display	: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p:{
      fontSize: '$md',
      color:'$gray300',
    },

    '&:last-child':{
      fontWeigt: 'bold',
      p:{
        color: '$white',
        
      }
    }
  },
})