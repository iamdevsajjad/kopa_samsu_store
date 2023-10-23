import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Navbar from "../../Shared/Navbar/Navbar";
import SingleCard from "../../SingleCard/SingleCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const Home = () => {
  const [cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addToCart = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <Navbar cart={cart} openModal = {openModal}/>
      <div className="allCards">
        <div className="card-container">
          {cards.map((card) => (
            <SingleCard key={card.id} SingleCard={card} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        cart = {cart}
        
      >
        <button onClick={closeModal} className="bg-red-500 text-white px-[6px] rounded-full " >X</button>
        <div className="fullCard w-80">
           {
            cart.map(item => <span
             key="item.id"
             className="flex border  mb-2"
            >
                <img className="w-14 m-6" src={item.img} alt="" />
                <div className="text my-auto">
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                </div>
            </span> )
           }
        </div>
      </Modal>
    </div>
  );
};

export default Home;
