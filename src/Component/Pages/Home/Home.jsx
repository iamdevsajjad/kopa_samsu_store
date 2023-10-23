import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import SingleCard from '../../SingleCard/SingleCard';


const Home = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (props) => {
        const newCart = [...cart, props]
        setCart(newCart)
    }

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
    return (
        <div>
            <Navbar cart = {cart}/>
            <div className="allCards">
                <div className="card-container">
                    {
                        cards.map(card => <SingleCard
                        key={card.id}
                        SingleCard = {card}
                        addToCart = {addToCart}
                        /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;