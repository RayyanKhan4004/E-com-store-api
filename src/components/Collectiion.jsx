
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/Slice'
import Loader from './Loader';
function Collection() {
  const [data, setData] = useState([]); 
  const [data2, setData2] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [isLoading2, setIsLoading2] = useState(true); 
  const [bought , setBought] = useState({})
 const dispatch = useDispatch()
function handlePurchase(params){

    dispatch(addToCart(params));
    setBought({
      ...bought,
      [params.id]: true
    })
    setTimeout(() => {
      setBought({
        ...bought,
        [params.id]: false
      })
    }, 1000);
 }  
  const handleError = (error) => {
    console.error('Error fetching categories:', error);
    setIsLoading(false); 
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchCategories();
  }, []);
  async function displayItems(params) {
 try{
         setIsLoading2(true)
         const response  = await fetch(`https://fakestoreapi.com/products/category/` + params)
         console.log(response)
         const data = await response.json();
          setData2(data)
         console.log(data)
         setIsLoading2(false)}
         catch(err) {
    console.log('error :' + err)
        }}
    useEffect(()=> {
        displayItems()
    } , [])
 
  return (
    <div className='mb-20'>  
      <div className="collection-container  ">
                <h2 className='text-center text-4xl bg-orange-500 font-extrabold p-1' > Available Categories  </h2>
        {isLoading && 'loding..'}
        {data.length > 0 && (
          <ul className=' flex gap-4 justify-between' >
            {data.map((category) => (
              <li key={category}>
               <button className='md:text-2xl max-sm:text-base text-orange-400 font-extrabold uppercase' onClick={ ()=>displayItems(category)} >
                {category}
                </button> 
              </li>
            ))}
          </ul>
        )} 
        {data.length === 0 && !isLoading && (
          <p>No categories found.</p>
        )}
      </div>
      { isLoading2 ? 
      <Loader/> :    
        <div className='p-4 grid xl:grid-cols-3 gap-6 z-20 justify-items-center lg:grid-cols-2 grid-cols-1  grid-container'>
         {      data2.map((curr) => (
              <div key={curr.id} className="w-[380px] shadow-inner bg-white overflow-hidden h-[540px] rounded-lg p-4 grid-item">
                <img className="w-[350px] h-[340px] rounded-lg" src={curr.image} alt={curr.title} />
                <h2 className="uppercase text-center max-h-14 overflow-hidden mb-2 text-xl text-semibold text-orange-500">
                    {curr.title}
                </h2>
                <p className='text-left max-h-11 overflow-hidden' >{curr.description}</p>
                <div className='flex gap-4'>

            <button className={` text-white h-12 w-16 rounded-md mt-3 ${
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
            {/* <Footer /> */}
             </div> 
             }
      
    </div>
  );
}
export default Collection;
