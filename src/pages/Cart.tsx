import useClothing from "../hooks/useClothing"
import ShoppingCart from "../components/ShoppingCart"
const Cart = () => {
  const {listCart,gotToWsp}=useClothing() || {listCart:[]}
  const getAddTotal =()=>{
    const sumaTotal = listCart.reduce(function(acumulador, producto) {
      return acumulador + producto.precio;
    }, 0)
    return sumaTotal
  }

  const sendToWsp =()=>{
    if(listCart.length ===0){
      return
    }
    if(gotToWsp){
      gotToWsp(getAddTotal())
    }
  }
  return (
    <>
      {listCart.length ?
        listCart.map((steel)=>(
          <ShoppingCart
            key={steel._id}
            steel={steel}
          />
        ))
        :
        <p>You haven't added anything to the cart yet</p>
      }
      <div className="shadow-2xl p-2 mt-4 rounded-lg  flex md:flex-row flex-col gap-4 py-2 justify-evenly items-center w-full md:w-2/3">
        <p className="text-lg font-semibold ">Total de artículos: {listCart.length}</p>
        <p className="text-lg font-semibold">Total a pagar: <span className="text-green-600">S/{getAddTotal()}</span></p>
        <button 
          className="text-purple-700 font-semibold text-lg"
          onClick={sendToWsp}
        >Enviar</button>
      </div>
    </>
  )
}

export default Cart