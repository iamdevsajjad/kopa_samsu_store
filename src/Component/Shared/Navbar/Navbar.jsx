import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = ({cart}) => {
    return (
        <header className='bg-gray-500 py-4 sticky top-0 z-20'>
            <div className="child-div text-white  flex justify-between container mx-auto">
            <div className="about"><h1 className='text-2xl'>Kopa Samsu Store</h1></div>
            <span className='absolute right-6 top-2 bg-red-600 px-[6px] rounded-full'>  {cart.length}</span>
            <div className="icon my-auto text-xl relative"> <button><BsFillCartFill /></button> </div>
            </div>
        </header>
    );
};

export default Navbar;