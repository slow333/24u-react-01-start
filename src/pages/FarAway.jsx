import React from 'react';
import H1 from "../ui/H1.jsx";
import styled from "styled-components";

const Header = styled.header`
  background-color: var(--color-yellow-100);
  padding: 2rem 0;
  text-align: center;
  text-transform: uppercase;
`
const ContainerAdd = styled.ul`
  display: flex;
  gap: 1rem;
`

const FarAway = () => {
  return (
       <>
         <Header>
           <h1 className='text-5xl text-gray-700/60 font-bold'> far away </h1>
         </Header>
         <div>

         </div>


       </>
  );
};

export default FarAway;