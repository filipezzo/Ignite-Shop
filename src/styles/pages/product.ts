import { styled } from "..";

export const ProductContainer = styled('main',{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ProductDetails = styled('div', {
 display: 'flex',
 flexDirection:  'column',
 
  h1:{
  color:"$gray300",
  fontSize: '2rem',
  fontWeight: "bold",
  marginBottom: '1rem',
 },

 span:{
  color:"$green300",
  fontSize: '2rem',
  display:'block',
 },

 p:{
marginTop: '2.5rem',
 lineHeight: 1.6,
 fontSize: '$md',
 color: "$gray300", 
 },

 button:{
  background: "$green500",
  padding: '1.25rem',
  border:0,
  color: "$white",
  borderRadius: 8,
  cursor: "pointer",
  marginTop: 'auto',
  textTransform: "uppercase",
  fontWeight: 'bold',
  fontSize: '$md',
'&:disabled':{
  opacity: 0.7,
  cursor: 'not-allowed',
},
  '&:not(:disabled):hover':{
    backgroundColor: '$green300',
    transition: 'all 0.2s',
  }
 }
})

export const ImageContainer = styled('div', {


  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  width: '100%',
  borderRadius: 8,
  padding: '0.25rem',
  display: "flex",
  alignItems: "center",
  justifyContent: 'center',
  height: 656,
  maxWidth: 576,

  img: {
    objectFit: 'cover',
  }
})


