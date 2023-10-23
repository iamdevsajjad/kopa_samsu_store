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
      <Navbar cart={cart} />
      <button onClick={openModal}>Open Modal</button>
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
        
      >
        <button onClick={closeModal} className="bg-red-500 text-white px-[6px] rounded-full " >X</button>
        <h1>hi i am mridul</h1>
      </Modal>
    </div>
  );
};

export default Home;
