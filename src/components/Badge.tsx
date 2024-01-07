import { IoCartOutline } from "react-icons/io5";
import useClothing from "../hooks/useClothing";
const Badge = () => {
  const {listCart}=useClothing() || {listCart:[]}
  
  const cuntCarts =()=>{
    return listCart.length
  }
  return (
    <div className="relative block  rounded-md">
      <IoCartOutline size={20}/>
      <span className="rounded-full bg-red-600 w-4 h-4 shadow-xl
      absolute flex items-center justify-center -top-1 right-14 md:-top-2 md:-right-3 text-white text-xs">{cuntCarts()}</span>
    </div>
  )
}

export default Badge