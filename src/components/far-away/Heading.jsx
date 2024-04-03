import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
   display: flex;
   background-color: var(--color-yellow-100);
   padding: 2rem 0;
   text-align: center;
   text-transform: uppercase;
`

const Heading = () => {
  return (
    <StyledHeader>
      <h1 className='text-5xl text-gray-700/60 font-bold'> far away </h1>
    </StyledHeader>
  );
};

export default Heading;