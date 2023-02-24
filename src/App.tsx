import { useState } from 'react';
import { Todo } from './models/todoModel';
import Form from './components/Form';
import TodoCard from './components/TodoCard';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (data: Todo) => {
    if (data) {
      const tempTodos = [...todos];
      tempTodos.push(data);
      setTodos(tempTodos);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className='container__controls'>
          <h1>ToDo App</h1>
          <Form handleAddTodo={handleAddTodo} />
        </div>
        <div className='container__content'>
          {todos && todos.map((todo) => <TodoCard key={todo.uuid} todo={todo} />)}
          {!todos ? <p>No todos added</p> : null}
        </div>
      </div>
    </div>
  );
};

export default App;
