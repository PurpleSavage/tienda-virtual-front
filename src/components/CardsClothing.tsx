import { Clothing } from "../interfaces/InterfacesTypes"
import { IoIosArrowRoundForward } from "react-icons/io";
import useClothing from "../hooks/useClothing";
import  { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
const CardsClothing = ({steel}:{steel:Clothing}) => {
  const [translateAnimation,setTranslateAnimation]=useState(false)
  const {clothingCart}=useClothing() || {clothingCart:()=>{}}
  const {nombre,descripcion,talla,precio,images}=steel
  const [stateCarousel,setStateCarousel]=useState(0)
  return (
    <>
      <Toaster/>
      <div className="shadow-xl w-56 rounded-lg pb-5 bg-white px-4 py-4">
        <div className="w-full h-56 rounded-lg relative">
          <button className=" absolute p-1 bg-gray-200 rounded-full top-1/2 -left-2 shadow-xl" onClick={()=>setStateCarousel(0)}><IoIosArrowBack size={20} /></button>
          <img src={images[stateCarousel].url ?images[stateCarousel].url :"" } className="w-full h-full " alt="imagen de ropa" />
          <button className="absolute  p-1 bg-gray-200 rounded-full top-1/2  -right-2 shadow-xl" onClick={()=>setStateCarousel(1)}><IoIosArrowForward size={20} /></button> 
        </div>
        <h3 className="text-lg font-bold mt-2">{nombre}</h3>
        <p >{descripcion}</p>
        <div className="flex justify-between items-center">
          <p>size:{talla}</p>
          <p className="text-green-800 font-bold">S/{precio}</p>
        </div>
        <button 
          className="font-bold text-green-600 hover:text-green-700 
          transition-colors rounded-md px-3 p-1 mt-3 
          flex items-center"
          onMouseOver={()=>setTranslateAnimation(true)}
          onMouseOut={()=>setTranslateAnimation(false)}
          onClick={()=>clothingCart(steel)}
        >Add
          <span 
            className={`${translateAnimation?"translate-x-1 transition-transform":" transition-transform"}`}
          ><IoIosArrowRoundForward size={25}/></span></button>
      </div>
    </>
  )
}

export default CardsClothing