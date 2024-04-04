import Button from "../../ui/Button.jsx";
import {useFaraway} from "../../context/FarawayContext.jsx";
import StyledFooter from "../../ui/StyledFooter.jsx";


const Footer = () => {

  const {todos, dispatch} = useFaraway();

  const total = todos.length;
  const doneTodos = todos.map(todo => todo.checked)
    .filter(todo => todo === true).length
  const percentage = ((doneTodos/total)*100).toFixed(2);

  function handleClear(e) {
    e.preventDefault();
    dispatch({type:'resetTodos'})
  }
  return (
    <StyledFooter>
      <div>준비한 것 /전체 개수 : {doneTodos}/{total}</div>
      <div>준비 완료: {percentage}% </div>
      <Button onClick={handleClear}>{percentage === '100.00' ? "떠나요.": '...준비중'}</Button>
    </StyledFooter>
  );
};

export default Footer;