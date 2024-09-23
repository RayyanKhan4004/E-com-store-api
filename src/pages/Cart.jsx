
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, updateQuantity } from '../store/Slice';   


// function Cart() {
   
//         const cart = useSelector((state) => state.cart.items); // Get cart items
//   const dispatch = useDispatch(); // Dispatch actions

//   const handleRemoveItem = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const handleQuantityChange = (itemId, newQuantity) => {
//     dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
//   };

//   const calculateSubtotal = (item) => {
//     return item.price * item.quantity;
//   };

//   const calculateTotal = () => {
//     return cart.reduce((acc, item) => acc + calculateSubtotal(item), 0);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is currently empty.</p>
//       ) : (
//         <ul className="cart-items-list">
//           {cart.map((item) => (
//             <li key={item.id} className="cart-item">
//               <div className="item-image">
//                 <img src={item.image} alt={item.name} />
//               </div>
//               <div className="item-details">
//                 <h3>{item.name}</h3>
//                 <p className="item-price">Price: ${item.price.toFixed(2)}</p>
//                 <div className="quantity-control">
//                   <button onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 0))}>-</button>
//                   <input type="number" min="0" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} />
//                   <button onClick={() => handleQuantityChange(item.id,   
//  item.quantity + 1)}>+</button>
//                 </div>
//                 <p className="subtotal">Subtotal: ${calculateSubtotal(item).toFixed(2)}</p>
//               </div>
//               <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cart.length > 0 && (
//         <div className="cart-summary">
//           <p className="total">Total: ${calculateTotal().toFixed(2)}</p>
//           <button className="checkout-button">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/Slice';
import Navbar from '../components/Navbar'; // Assuming Navbar component exists
import Footer from '../components/Footer'; // Assuming Footer component exists
import { useNavigate } from 'react-router-dom';

function Cart() {
  const Navigate = useNavigate()
  const cart = useSelector((state) => state.cart.items); // Get cart items
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + calculateSubtotal(item), 0);
  };

  return (
    <div className="bg-gray-300">
      <Navbar />
      <div className="container mx-auto px-4  py-16">
        <h2 className='font-bold text-orange-500 text-xl uppercase'>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is currently empty.</p>
        ) : (
          <ul className="cart-items-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item max-sm:flex-col flex items-center py-4 border-b border-gray-200">
                <div className="item-image mr-4">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[200px] min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] object-cover rounded-lg"
                  />
                </div>
                <div className="item-details flex-grow">
                  <h3 className="text-2xl text-white font-semibold">{item.name}</h3>
                  <p className="text-md text-gray-500">{item.description}</p>
                  <div className="quantity-control flex items-center mt-4">
                    <button
                      className="bg-orange-500 text-white px-2 py-1 rounded-md mr-2"
                      onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 0))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="text-center px-2 py-1 border border-gray-300 rounded-md w-10"
                    />
                    <button
                      className="bg-orange-500 text-white px-2 py-1 rounded-md ml-2"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="subtotal text-md text-gray-500 mt-4">
                    Subtotal: ${calculateSubtotal(item).toFixed(2)}
                  </p>
                </div>
                <button
                  className="remove-item bg-orange-500 text-white px-4 py-2 rounded-md ml-auto"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="cart-summary flex justify-between items-center pt-8 border-t border-gray-200">
            <p className="total text-xl  text-orange-600 ">Total: ${calculateTotal().toFixed(2)}</p>
            <button  
            onClick={()=>{
              Navigate('/vaidation')
            }}
            className="checkout-button bg-orange-500 text-white px-4 py-2 rounded-md">
              Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;