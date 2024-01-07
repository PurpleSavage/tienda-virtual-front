import {  useContext} from "react";
import ClothingContext from "../providers/ClothingProvider";
const useClothing = () => {
  return useContext(ClothingContext)
}

export default useClothing