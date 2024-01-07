import { BrowserRouter,Routes,Route} from "react-router-dom"
import IndexLayout from "./layouts/IndexLayout"
import Upperwear from "./pages/Upperwear"
import Lowerwear from "./pages/Lowerwear"
import FullBody from "./pages/FullBody"
import { ClothingProvider } from "./providers/ClothingProvider"
import Cart from "./pages/Cart"
BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <ClothingProvider>
        <Routes>
          <Route path="/" element={<IndexLayout/>}>
            <Route path="fullbody" element={<FullBody/>}/>
            <Route path="lowerwear" element={<Lowerwear/>}/>
            <Route path="upperwear" element={<Upperwear/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </ClothingProvider>      
      
    </BrowserRouter>
  )
}

export default App
