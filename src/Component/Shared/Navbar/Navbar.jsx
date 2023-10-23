import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <header className='bg-gray-500 py-4 sticky top-0 z-20'>
            <div className="child-div text-white  flex justify-between container mx-auto">
            <div className="about"><h1 className='text-2xl'>Kopa Samsu Store</h1></div>
            <div className="icon my-auto text-xl"><BsFillCartFill /><sup></sup></div>
            </div>
        </header>
    );
};

export default Navbar;