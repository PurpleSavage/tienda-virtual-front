import { Clothing } from "../interfaces/InterfacesTypes"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io"
import useClothing from "../hooks/useClothing"
const ShoppingCart = ({steel}:{steel:Clothing}) => {
  const [stateCarousel,setStateCarousel]=useState(0)
  const {images,nombre,descripcion,talla,precio,_id}=steel
  const {removeToCart}=useClothing()|| {} 
  const sendIdRemoveCart =()=>{
    if(removeToCart){
      removeToCart(_id)
    }
  }
  return (
    <div className="flex w-full md:w-2/3 shadow-2xl p-2 gap-1 rounded-md">
        <div className=" w-1/2 md:w-2/3 space-y-2 my-auto ">
            <h1 className="text-xl font-bold">{nombre}</h1>
            <p>{descripcion}</p>
            <p>{talla}</p>
            <p className="text-green-700  font-bold">S/{precio}</p>
            <button 
              className="p-2 bg-red-600 text-white hover:bg-red-700 transition-colors rounded-md"
              onClick={sendIdRemoveCart}
            >Remove from cart.</button>
        </div>
        <div className="w-1/2 md:w-1/3 h-56 flex gap-2 relative">
          <button className=" absolute p-1 bg-gray-200 rounded-full top-1/2 z-50 -left-2 shadow-xl" onClick={()=>setStateCarousel(0)}><IoIosArrowBack size={20} /></button>
          <img src={images[stateCarousel].url ?images[stateCarousel].url:""} className="w-full h-full " alt="imagen de ropa" />
          <button className="absolute  p-1 bg-gray-200 rounded-full top-1/2 z-20 -right-2 shadow-xl" onClick={()=>setStateCarousel(1)}><IoIosArrowForward size={20} /></button>
        </div>
    </div>
  )
}

export default ShoppingCart