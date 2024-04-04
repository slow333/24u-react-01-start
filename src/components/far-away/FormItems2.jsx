import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../ui/Button.jsx";

const ContainerAdd = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3rem;
   background-color: #4b5563;
   padding: 2rem 0;
   font-size: 1.2rem;
`;
const StyledFormItems = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;
   color: #4f46e5;
`;
const InputItem = styled.input`
   border: 1px solid #aaa;
   padding: 4px 0 4px 8px;
   border-radius: var(--border-radius-md);
`;
const SelectedNum = styled.select`
   border: 1px solid #aaa;
   padding: 4px 0 4px 8px;
   border-radius: var(--border-radius-md);
`;

function FormItems ({setTodos, todos}) {

  const [todo, setTodo] = useState({
    id:'', num: 0, todo:'', checked: false,
  })

  function handleChange(e) {
    setTodo({ ...todo,
      [e.target.name]: e.target.value  } );
  }
  useEffect(() => {
    if(todos.length < 1) return;
    localStorage.setItem('travel', JSON.stringify(todos));
  },[todos])

  useEffect(() => {
    const lcItems = localStorage.getItem('travel');
    const items = JSON.parse(lcItems)
    if(!items) return;
    setTodos(items)
  },[])

  function handleSubmit(e){
    e.preventDefault();
    setTodos(todos => [...todos, {...todo, id: uuidv4()}]);
  }

  return (
    <ContainerAdd>
      <div className='text-3xl text-stone-100'>여행 준비물을 챙기세요</div>
      <StyledFormItems onSubmit={handleSubmit}>
        <SelectedNum name='num' onChange={handleChange} value={todo.num}>
          <option value=''>개수 선택</option>
          {Array.from({length:10},(_, idx) =>
            <option key={idx} value={idx+1}>{idx+1}</option>)}
        </SelectedNum>
        <InputItem name='todo' onChange={handleChange} value={todo.todo}/>
        <Button> ADD </Button>
      </StyledFormItems>
    </ContainerAdd>
  );
};

export default FormItems;