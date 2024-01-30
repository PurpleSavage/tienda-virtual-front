import { MessageAlert } from "../interfaces/InterfacesTypes"
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useClothing from "../hooks/useClothing";
const PopUpMessage = ({msg}:{msg:MessageAlert}) => {
  const {closeModal}=useClothing()||{closeModal:()=>{}}
  const {body}=msg
  return (
    <div className="fixed z-50 flex items-center justify-center  bottom-0 top-0 left-0 right-0">
      <section className="w-3/4 md:w-1/3 shadow-2xl rounded-md bg-white space-y-3 py-2 px-4">
        <div className=" flex justify-end  ">
          <button 
            onClick={closeModal}
            className="p-1 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"><VscClose /></button>
        </div>
        <p className="text-red-500 text-lg">{body}</p>
        <div >
          <Link 
            to="cart"
            onClick={closeModal} 
            className="px-4 py-1 text-md text-white rounded-md bg-red-600 hover:bg-red-700 transition-colors">Go to cart</Link>
        </div>
      </section>
    </div>
  )
}

export default PopUpMessage