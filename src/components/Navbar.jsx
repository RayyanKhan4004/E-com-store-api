// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import Cards from '../pages/cards'
// function Navbar() {
//   const navigate = useNavigate()
//   // const Navigate = useNavigate()
//   return (
//     <div> <header className="flex justify-between bg-gray-300 items-center p-4 border-b">
//     <h1 className="text-2xl font-bold"  
//     onClick={navigate()}
//     >Intern</h1>
//     <nav className="space-x-4">
//         <Link to={'/'} className="text-gray-600 hover:text-gray-800">Home</Link>
//         <Link to={'/Cards'} className="text-gray-600 hover:text-gray-800">Products</Link>
//         <Link to={'/Collection'} className="text-gray-600 hover:text-gray-800">Collection</Link>
//         <Link to={'/cart'} className="text-gray-600 hover:text-gray-800">Cart</Link>
//     </nav>
// </header></div>
//   )
// }

// export default Navbar
import React from 'react';
import { Link, useNavigate  , useLocation} from 'react-router-dom';

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <header className="flex justify-between bg-gray-300 items-center p-4 border-b">
      <h1 className="text-2xl uppercase text-orange-400  font-extrabold cursor-pointer" onClick={() => navigate('/')}>
        Intern
      </h1>
      <nav className="space-x-4">
        <Link to="/" className={  location.pathname == '/' ? "text-orange-600 hover:text-orange-800" : 
          'text-gray-600 hover:text-gray-800'
        }>Home</Link>
        <Link to="/cards" className={  location.pathname == '/cards' ? "text-orange-600 hover:text-orange-800" : 
          'text-gray-600 hover:text-gray-800'
        }>Products</Link>
        <Link to="/collection" className={  location.pathname == '/collection' ? "text-orange-600 hover:text-orange-800" : 
          'text-gray-600 hover:text-gray-800'
        }>Collection</Link>
        <Link to="/cart" className={  location.pathname == '/cart' ? "text-orange-600 hover:text-orange-800" : 
          'text-gray-600 hover:text-gray-800'
        }>Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;