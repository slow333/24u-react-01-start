import React from 'react';

const Pizza = ({pizza}) => {
  const {name, ingredients, price, photoName, soldOut} = pizza;

  return (
       <div className='pizza'>
         <img src={photoName} alt={name}/>
         <div>
         <h3>{name}</h3>
         <p>{ingredients}</p>
         <p>price: {price}</p>

         </div>
       </div>
  );
};

export default Pizza;