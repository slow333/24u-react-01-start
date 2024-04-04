import React from 'react';
import {useFaraway} from "../../context/FarawayContext.jsx";

import Todo from "./Todo.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;
  //justify-content: flex-start;
  //justify-items: start;
  gap: 1.2rem;
  padding: 2rem 3rem;
  background-color: var(--color-grey-200);
  //height: 100%;
  flex-grow: 1;
`;

const ItemList = () => {
  const {todos} = useFaraway();

  return (
     <>
     {todos.length > 0 &&
        <>
          <TodosContainer>
            {todos.map((item) =>
                 <Todo key={item.id} item={item} />)}
          </TodosContainer>
          <Footer />
        </>
     }
     </>
  );
};

export default ItemList;