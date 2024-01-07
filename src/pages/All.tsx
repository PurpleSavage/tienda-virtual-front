import { useEffect } from "react"
import CardsClothing from "../components/CardsClothing"
import useClothing from "../hooks/useClothing"
const All = () => {
    const {ropa,getAllClothing}=useClothing() || { ropa: [],getAllClothing:()=>{} }
    useEffect(()=>{
        getAllClothing()
    },[])
  return (
    <>
      {
        ropa.length?
        ropa.map((steel)=>(
          <CardsClothing
              steel={steel}
              key={steel.id}
          />
      )):<p>Aún no hay resultados en esta sección</p>
      }
    </>
  )
}

export default All