import { styled } from "..";
import Link from "next/link"
export const HomeContainer = styled('main', {
  display: 'flex',
 width: '100%',
   maxWidth: 'calc(100vw - ((100vw - 1180px) /2))',
   marginLeft: 'auto',
   minHeight: 656,
});

export const Product = styled('div',{
background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
borderRadius: 8,
cursor: 'pointer',
position: 'relative',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
overflow: 'hidden',

img: {
  objectFit: 'cover',
},

footer: {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  display: 'flex',
  padding: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(0,0,0,0.6)',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
  span :{
    color: '$green300',
    fontWeight: 'bold',
    fontSize: '$xl',
    },

  strong:{
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    
  }
},

'&:hover':{
  footer: {
    transform: 'translateY(0%)',
    opacity: 1,
  }
}
})