import useClothing from "../hooks/useClothing"
import CardsClothing from "../components/CardsClothing"
import { useEffect } from "react"

const Lowerwear = () => {
  const {ropa,getAllLower}=useClothing() || { ropa: [],getAllLower:()=>{} }
  useEffect(()=>{
    getAllLower()
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

export default Lowerwear