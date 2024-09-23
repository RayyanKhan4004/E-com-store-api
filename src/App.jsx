import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/cards";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Vlidation from "./pages/Vlidation";
const App = createBrowserRouter([{
  path: '/' ,
  element: <Home />
},{
  path: 'cards',
  element : <Cards/>
},{
  path: 'collection'
  ,
  element : <Products/>
},{
  path: 'cart',
  element : <Cart/>
},{
  path : '/vaidation',
  element : <Vlidation/>
}]) 
export default App;