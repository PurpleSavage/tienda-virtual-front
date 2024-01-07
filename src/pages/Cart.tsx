import useClothing from "../hooks/useClothing"
import ShoppingCart from "../components/ShoppingCart"
const Cart = () => {
  const {listCart}=useClothing() || {listCart:[]}
  return (
    <>
      {listCart.length ?
        listCart.map((steel)=>(
          <ShoppingCart
            key={steel.id}
            steel={steel}
          />
        ))
        :
        <p>Aún no agregaste nada al carrito</p>
      }
    </>
  )
}

export default Cart