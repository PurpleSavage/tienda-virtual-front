import { Clothing } from "../interfaces/InterfacesTypes"

const ShoppingCart = ({steel}:{steel:Clothing}) => {

    const {url,nombre,descripcion,talla,precio}=steel
  return (
    <div className="flex w-full md:w-2/3 shadow-2xl p-4 gap-1 rounded-md">
        <div className="w-3/4 space-y-1 my-auto">
            <h1 className="text-xl font-bold">{nombre}</h1>
            <p>{descripcion}</p>
            <p>{talla}</p>
            <p className="text-green-700  font-bold">S/{precio}</p>
        </div>
        <div className="w-1/4 ">
            <img src={url} alt="" />
        </div>
    </div>
  )
}

export default ShoppingCart