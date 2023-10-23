import React, { useEffect, useState } from 'react';
import SingleCard from '../../SingleCard/SingleCard';

const Home = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data));
    }, [])
    return (
        <div>
            <div className="allCards">
                <div className="card-container">
                    {
                        cards.map(card => <SingleCard
                        key={card.id}
                        SingleCard = {card}
                        /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;