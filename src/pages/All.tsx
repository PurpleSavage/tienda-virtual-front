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
              key={steel._id}
          />
      )):<p>There are still no results in this section.</p>
      }
    </>
  )
}

export default All