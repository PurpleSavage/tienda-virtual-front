export interface ClothingProviderProps {
    children: ReactNode;
}
export type urlObjectTypes ={
    _id?:string
    vew:vewClothingType
    url:string,
    nameFile?:string
}
export interface Clothing{
    _id:string,
    nombre:string,
    descripcion:string,
    talla:number,
    precio: number,
    images:urlObjectTypes[]  ,
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
    closeModal:()=>void,
    removeToCart:(id:string)=>void,
    gotToWsp:(total:number)=>void
}
export interface ClothingFilter{
    count:number
    steel:Clothing
}
export interface MessageAlert{
    state:boolean
    body:string
}
  