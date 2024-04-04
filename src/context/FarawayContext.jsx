import {createContext, useContext, useReducer} from "react";
import {v4 as uuidv4} from "uuid";

const FarawayContext = createContext()

const initialState = {
  todos:[], todo:{num:0, id:'', item: '', checked: false}
}
function reducer(state, action){
  switch (action.type) {
    case 'addTodos':
      return {
        ...state,
        todos: [...state.todos, {...action.payload, id:uuidv4() }] }
    case 'setTodos':
      return {
        ...state,
        todos: action.payload }
    case 'setItem':
      return {
        ...state,
        todo: {...state.todo, item: action.payload }
    }
    case 'setNum':
      return {
        ...state,
        todo: {...state.todo, num: action.payload }
      }
    case 'setCheck' :
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? {...todo, checked: !todo.checked} : todo;
        })
      }
    case 'resetTodos':
      localStorage.setItem('travel', '')
      return {
        ...state,
        todos: [],
      }
    default:
      throw new Error("이상해요 ...");
  }
}

function FarawayProvider({children}) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state;

  return (
       <FarawayContext.Provider value={{
         todo, todos, dispatch
       }}>
         {children}
       </FarawayContext.Provider>
  );
}

function useFaraway() {
  const context = useContext(FarawayContext);
  if(context === undefined) throw new Error("Context was used outside of Provider")
  return context;
}

export {FarawayProvider, useFaraway};