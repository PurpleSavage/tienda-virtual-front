import useClothing from "../hooks/useClothing"
import CardsClothing from "../components/CardsClothing"
import { useEffect } from "react"
const Upperwear = () => {
  const {ropa,getAllUpper}=useClothing() || { ropa: [],getAllUpper:()=>{} }
  useEffect(()=>{
    getAllUpper()
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

export default Upperwear