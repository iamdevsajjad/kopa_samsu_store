import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import "./SingleCard.css";
const SingleCard = ({SingleCard}) => {
    return (
        <div className='card'>
            <div className="image-container"><img src={SingleCard.img} alt="" /></div>
            <div className="gun-info">
                <h1>{SingleCard.name}</h1>
                <h1>Bullet Type : {SingleCard.bullet}</h1>
                <h1>  Capacity :  {SingleCard.capacity}</h1>
                <h1> Action : {SingleCard.action}</h1>
            </div>
            <div className="add-to-cart ">
                <button> <BsFillCartFill className='icon mx-auto' /></button>
                <h1>${SingleCard.price}</h1> 
            </div>
        </div>
    );
};

export default SingleCard;