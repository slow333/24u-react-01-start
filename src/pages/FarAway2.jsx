import React, {useState} from 'react';
import FormItems from "../components/far-away/FormItems.jsx";
import Todo from "../components/far-away/Todo.jsx";
import styled from "styled-components";
import Footer from "../components/far-away/Footer.jsx";

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

const FarAway = () => {
  const [todos, setTodos] = useState([])

  return (
       <>
         <FormItems setTodos={setTodos} todos={todos}/>
         {todos.length > 0 &&
              <>
                <TodosContainer>
                  {todos.map((item) =>
                       <Todo key={item.id} todos={todos} item={item} setTodos={setTodos}/>)}
                </TodosContainer>
                <Footer todos={todos} setTodos={setTodos}/>
              </>
         }
       </>
  );
};

export default FarAway;