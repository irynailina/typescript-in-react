import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  const [todos, setTodos] = useState([])
  const addHandler = (title: string) => {
    console.log('Add new todo', title)
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <>
    <Navbar />
    <Container maxWidth="md">
      <h1>Test</h1>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos}/>
    </Container>
    </>
  )
}

export default App;
