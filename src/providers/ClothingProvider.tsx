import { createContext,   useState} from "react"
import { ClothingProviderProps } from "../interfaces/InterfacesTypes"
import { ClothingContextProps } from "../interfaces/InterfacesTypes";
import { Clothing } from "../interfaces/InterfacesTypes";
import { MessageAlert } from "../interfaces/InterfacesTypes";
import toast from 'react-hot-toast';
const ClothingContext=createContext<ClothingContextProps | undefined>(undefined);
const ClothingProvider:React.FC<ClothingProviderProps> = ({children}) => {
    const [ropa,setRopa]=useState<Clothing[]>([])
    const [closeMenu,setCloseMenu]=useState(false)
    const [listCart,setListCart]=useState<Clothing[]>([])
    const [msg,setMsg]=useState<MessageAlert>({ state: false, body: '' })
    const getAllClothing= async()=>{
        try {
            const respuesta = await fetch("http://localhost:3000/ropa")
            const data = await respuesta.json()
            setRopa(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getAllFullBody =async()=>{
        try {
            const respuesta = await fetch("http://localhost:3000/ropa")
            const data:Clothing[] = await respuesta.json()
            const dataFiltered = data.filter((item)=>item.typeBody==="full")
            setRopa(dataFiltered )
            
        } catch (error) {
            console.log(error)
        }
    }
    const getAllLower =async()=>{
        try {
            const respuesta = await fetch("http://localhost:3000/ropa")
            const data:Clothing[] = await respuesta.json()
            const dataFiltered = data.filter((item)=>item.typeBody==="lower")
            setRopa(dataFiltered )
            
        } catch (error) {
            console.log(error)
        }
    }
    const getAllUpper =async()=>{
        try {
            const respuesta = await fetch("http://localhost:3000/ropa")
            const data:Clothing[] = await respuesta.json()
            const dataFiltered = data.filter((item)=>item.typeBody==="body")
            setRopa(dataFiltered )
            
        } catch (error) {
            console.log(error)
        }
    }
    const clothingCart =(steel:Clothing)=>{
        try {
            const objEncontraddo= listCart.find(obj=>obj.id===steel.id)
            if(objEncontraddo){
                const message:MessageAlert={
                    state:true,
                    body:"🙄 Este ítem ya ha sido agregado"
                }
                setMsg(message)
                return
            }
            toast('😎 Agregaste este ítem al carrito.',{
                position:"bottom-right",
                duration:2000
            });
            setListCart([...listCart,steel])   
        } catch (error) {
            console.log(error)
        }   
    }
    const closeModal=()=>{
        const message:MessageAlert={
            state:false,
            body:""
        }
        setMsg(message)
    }
  return (
    <ClothingContext.Provider
        value={{
            ropa,
            getAllFullBody,
            getAllClothing,
            getAllLower,
            getAllUpper,
            closeMenu,
            setCloseMenu,
            clothingCart,
            listCart,
            msg,
            closeModal
        }}
    >
        {children}
    </ClothingContext.Provider>
  )
}
export{
    ClothingProvider
}
export default ClothingContext