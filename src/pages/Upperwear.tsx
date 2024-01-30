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
              key={steel._id}
          />
      )):<p>There are still no results in this section.</p>
      }
    </>
  )
}

export default Upperwear