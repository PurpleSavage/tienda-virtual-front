import { Outlet,Link, useLocation } from "react-router-dom"
import img from '../img/monroecom.png'
import All from "../pages/All"
import { VscClose } from "react-icons/vsc";
import useClothing from "../hooks/useClothing";
import { IoIosMenu } from "react-icons/io";
import Badge from "../components/Badge";
import { useEffect,useState } from "react";
import PopUpMessage from "../components/PopUpMessage";
const myDivStyle={
    backgroundColor:"rgba(16, 16, 16,0.6)"
}
const IndexLayout=() => {
    const {pathname}=useLocation()
    const titleSection = pathname !=="/"?pathname.split("/")[1]:""
    const {closeMenu,setCloseMenu,msg}=useClothing() || {closeMenu:false,setCloseMenu:()=>{},msg:{ state: false, body: '' }}
    const [bgClass, setBgClass] = useState('bg-black');

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setBgClass((prevClass) => {
        switch (prevClass) {
          case 'bg-black':
            return 'bg-pink-600';
          case 'bg-pink-600':
            return 'bg-fuchsia-600';
          case 'bg-fuchsia-6000':
            return 'bg-black';
          default:
            return 'bg-black';
        }
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
        {msg.state && <PopUpMessage msg={msg}/>}
        <header className={`w-full h-96 relative ${bgClass} transition-colors duration-300 ease-out delay-100 `}>
            <div className="absolute h-96 right-0 top-0 left-0 flex justify-center items-center">
                <img src={img} alt="" className=" h-full scale-100" />
            </div>
            <div className="absolute right-0 h-96 top-0 left-0 z-20 flex items-center gap-4 justify-center flex-col" style={myDivStyle}>
                <h1 className="text-6xl  ">
                    <span className="text-red-600">M</span>
                    <span className="text-orange-400">o</span>
                    <span className="text-amber-600">n</span>
                    <span className="text-purple-600">r</span>
                    <span className="text-pink-600">o</span> 
                    <span className="text-white">e</span>
                </h1>
                <p className="text-xl text-center text-white px-2">Bievenido a Monroe, una tienda sencilla para mujeres con glamur</p>
            </div>
            <button className="absolute md:hidden top-3 left-3 z-30 text-white" onClick={()=>setCloseMenu(!closeMenu)}><IoIosMenu size={25} /></button>   
        </header>
        <div 
            className={`fixed bottom-0 top-0 md:static
            -left-52 ${closeMenu ? "translate-x-52 transition-transform duration-200 ease-out":"transition-transform duration-200 ease-out"} 
            rounded-r-lg shadow-2xl md:shadow-none bg-white md:bg-transparent z-40 p-3 space-y-5 pr-8 md:translate-x-0`}>
            <button className="md:hidden block" onClick={()=>setCloseMenu(!closeMenu)}><VscClose size={25} /></button>
            <nav className=" flex justify-center">
                <ul 
                    className="flex flex-col md:flex-row gap-10  
                    shadow-none md:shadow-2xl md:bg-pink-50 md:p-4 md:rounded-lg md:w-3/4 md:justify-center md:items-center ">
                    <li>
                        <Link 
                            to="/" 
                            className={`font-bold hover:text-red-800 
                            ${pathname=="/"?"text-red-800 ":""}`}
                            onClick={()=>setCloseMenu(!closeMenu)}
                        >All</Link>
                    </li>
                    <li>
                        <Link 
                            to="fullbody" 
                            className={`font-bold hover:text-red-800 ${pathname==="/fullbody"? "text-red-800 ":""}`}
                            onClick={()=>setCloseMenu(!closeMenu)}
                        >Fullbody</Link>
                    </li>
                    <li>
                        <Link 
                            to="lowerwear" 
                            className={`font-bold hover:text-red-800 ${pathname==="/lowerwear"? "text-red-800 ":""}`}
                            onClick={()=>setCloseMenu(!closeMenu)}
                        >Lowerwear</Link>
                    </li>
                    <li>
                        <Link 
                            to="upperwear" 
                            className={`font-bold hover:text-red-800 ${pathname==="/upperwear"? "text-red-800 ":""}`}
                            onClick={()=>setCloseMenu(!closeMenu)}
                        >Upperwear</Link>
                    </li>
                    <li>
                        <Link 
                            to="cart" 
                            className={`font-bold hover:text-red-800 ${pathname==="/cart"? "text-red-800 ":""}`}
                            onClick={()=>setCloseMenu(!closeMenu)}
                        ><Badge/></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <h2 className="text-2xl w-4/5 mx-auto my-10 px-8">Section: {pathname==="/"? "All":titleSection }</h2>
        <section className=" mt-8 w-full md:w-2/3 mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 p-4 pb-10">
            {
                pathname==="/"?
                    <All/>
                    :
                    <Outlet/>
            }
        </section>
    </>
  )
}

export default IndexLayout