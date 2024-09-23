import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate  , useLocation} from 'react-router-dom';

function LandingPage() {
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location.pathname)
  return (
    <div>
        <div className='flex justify-center items-center rounded-lg h-[50vh] bg-landing-page ' >
            {/* <img className='absolute z-0' src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
            <div><h1 className='uppercase font-bold text-[50px] text-white ' >
                welcome to our store 
                </h1>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <button className='bg-orange-500 hover:bg-orange-400 border-2  hover:ff border-orange-500 text-white font-bold py-
                    2 px-4 rounded duration-700 w-[280px] h-[50px] text-xl '>
                     <div onClick={()=> navigate('/cards')} className='flex items-center justify-center gap-3 text-3xl'>shop Now <FaArrowRight /></div>

                    </button>
                </div>
        </div>
    </div>
  )
}

export default LandingPage