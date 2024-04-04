import styled from "styled-components";
import {useState} from "react";

const StyledTodo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   background-color: white;
   //width: 18rem;
   height: 4rem;
   border-radius: 8px;
   box-shadow: #1f2937;
   padding: 1rem 4rem;
   font-size: 1.8rem;
`;

const Todo = ({item, todos, setTodos}) => {

  const [checked, setChecked] = useState(
    todos.find(todo => todo.id === item.id).checked
  );

  const isChecked = item.id === todos.filter(todo => todo.id === item.id).id

  function handleCheck(id) {
    setChecked(checked => !checked);
    setTodos(todos => todos.map(todo => {
      return todo.id === id ? {...todo, checked: !todo.checked} : todo;
    }))
  }

  return (
    <StyledTodo>
      <div className={`${isChecked ? 'italic line-through' : ''}`}>
      {item.num} : {item.todo}
      </div>
      <input type='checkbox' checked={checked}
             onChange={() => handleCheck(item.id)}/>
    </StyledTodo>
  );
};

export default Todo;