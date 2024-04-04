import React from 'react';
import Header from "../ui/Header.jsx";
import '../styles/pizza-index.css'
import Title from "../ui/Title.jsx";
import getPizza from "../data/pizzaData.js";
import Pizza from "../components/pizza-menu/Pizza.jsx";
import Container from "../ui/Container.jsx";

const PizzaMenu = () => {
  const pizzas = getPizza();
  console.log(pizzas)
  return (
       <>
         <Header family='roboto' weight='600'>Pizza Menu</Header>
         <div className='p-5'>
           <Title>OUT Menu</Title>
           <div className='pizzas mt-12'>
             {pizzas.map(pizza => <Pizza key={pizza.name} pizza={pizza}/>)}
           </div>
         </div>
       </>
  );
};

export default PizzaMenu;