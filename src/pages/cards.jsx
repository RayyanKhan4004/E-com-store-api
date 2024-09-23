
import LoadingSkeleton from '../components/LoadingSkeleton';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch   
 } from 'react-redux';
import   
 { addToCart } from '../store/Slice';

function Cards() {
  const [bought, setBought] = useState({}); 
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handlePurchase = (product) => {
    dispatch(addToCart(product));
    setBought({ ...bought, [product.id]: true }); 
    setTimeout(() => {
      setBought({ ...bought, [product.id]: false });
    }, 1000);
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new   
 Error(`Failed to fetch data:   
 ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <div className="p-4">
        <input
          className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {isLoading ? (
          <LoadingSkeleton />
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <div>
            <h2 className="text-center uppercase text-white text-4xl bg-orange-500 font-extrabold p-1">
              Wanna buy Something?
            </h2>
            <div className="p-4 grid xl:grid-cols-3 gap-6 justify-items-center lg:grid-cols-2 grid-cols-1">
              {filteredData.map((curr) => (
                <div key={curr.id} className="w-[380px] bg-white overflow-hidden h-[540px] rounded-lg p-4">
                  <img className="w-[350px] h-[340px] rounded-lg" src={curr.image} alt={curr.title} />
                  <h2 className="uppercase text-center max-h-14 overflow-hidden mb-2 text-xl text-semibold text-orange-500">
                    {curr.title}
                  </h2>
                  <p className="text-left max-h-11 overflow-hidden">{curr.description}</p>
                  <div className="flex gap-4">
                    <button
                      className={` text-white h-12 w-16 rounded-md mt-3 ${
                        bought[curr.id] ? 'bg-green-500' : 'bg-orange-400' 
                      }`}
                      onClick={() => handlePurchase(curr)}
                    >
                      Buy?{bought[curr.id] && '✔'}
                    </button>    
                               <div className='bg-orange-400 flex justify-center items-center text-white h-12  w-16 rounded-md mt-3' >{curr.price} </div>
               </div>
             </div>
            ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  );
}

export default Cards;