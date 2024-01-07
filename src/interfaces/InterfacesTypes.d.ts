export interface ClothingProviderProps {
    children: ReactNode;
}
export interface Clothing{
    id:string,
    nombre:string,
    descripcion:string,
    talla:number,
    precio: number,
    url:strinng,
    typeBody:"full"|"body"|"lower"
}

export interface ClothingContextProps {
    ropa:Clothing[],
    getAllFullBody:()=>void,
    getAllClothing:()=>void,
    getAllLower:()=>void,
    getAllUpper:()=>void,
    clothingCart:MouseEventHandler<HTMLButtonElement>
    closeMenu:boolean,
    setCloseMenu:React.Dispatch<React.SetStateAction<boolean>>,
    listCart:Clothing[],
    msg:MessageAlert,
    closeModal:()=>void
}
export interface ClothingFilter{
    count:number
    steel:Clothing
}
export interface MessageAlert{
    state:boolean
    body:string
}
  