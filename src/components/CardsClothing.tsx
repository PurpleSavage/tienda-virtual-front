import { Clothing } from "../interfaces/InterfacesTypes"
import { IoIosArrowRoundForward } from "react-icons/io";
import useClothing from "../hooks/useClothing";
import  { Toaster } from 'react-hot-toast';
import { useState } from "react";
const CardsClothing = ({steel}:{steel:Clothing}) => {
  const [translateAnimation,setTranslateAnimation]=useState(false)
  const {clothingCart}=useClothing() || {clothingCart:()=>{}}
  const {nombre,descripcion,talla,precio,url}=steel
 


  
  return (
    <>
      <Toaster/>
      <div className="shadow-xl w-56 rounded-lg pb-5 bg-white px-4 py-4">
        <div className="w-full h-56 rounded-lg">
          <img src={url} className="w-full h-full " alt="imagen de ropa" /> 
        </div>
        <h3 className="text-lg font-bold mt-2">{nombre}</h3>
        <p >{descripcion}</p>
        <div className="flex justify-between items-center">
          <p>talla:{talla}</p>
          <p className="text-green-800 font-bold">S/{precio}</p>
        </div>
        <button 
          className="font-bold text-green-600 hover:text-green-700 
          transition-colors rounded-md px-3 p-1 mt-3 
          flex items-center"
          onMouseOver={()=>setTranslateAnimation(true)}
          onMouseOut={()=>setTranslateAnimation(false)}
          onClick={()=>clothingCart(steel)}
        >Agregar
          <span 
            className={`${translateAnimation?"translate-x-1 transition-transform":" transition-transform"}`}
          ><IoIosArrowRoundForward size={25}/></span></button>
      </div>
    </>
  )
}

export default CardsClothing