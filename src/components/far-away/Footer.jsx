import styled from "styled-components";
import Button from "../../ui/Button.jsx";

const StyledFooter = styled.footer`
   display: flex;
   font-size: 1.8rem;   
   justify-content: space-between;
   background-color: #1f2937;
   color: white;
   padding: 1rem;
`;

const Footer = ({todos, setTodos}) => {
  const total = todos.length;
  const doneTodos = todos.map(todo => todo.checked)
    .filter(todo => todo === true).length
  const percentage = (doneTodos/total)*100;

  function clearTodos() {
    setTodos(null)
  }
  return (
    <StyledFooter>
      <div>준비한 것 /전체 개수 : {doneTodos}/{total}</div>
      <div>준비 완료: {percentage}% </div>
      <Button onClick={clearTodos}>떠나요.</Button>
    </StyledFooter>
  );
};

export default Footer;