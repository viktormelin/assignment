import { FormEvent, MouseEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../models/todoModel';

const Form = ({ handleAddTodo }: { handleAddTodo: (data: Todo) => void }) => {
  const [todoLabel, setTodoLabel] = useState<string>();
  const [todoDesc, setTodoDesc] = useState<string>();

  const addTodo = (e: MouseEvent<HTMLElement> | FormEvent) => {
    e.preventDefault();

    if (todoLabel && todoDesc) {
      handleAddTodo({ uuid: uuidv4(), label: todoLabel, desc: todoDesc });
    }
  };

  return (
    <form onSubmit={addTodo}>
      <label htmlFor='todoLabel'>Todo label</label>
      <input type='text' name='todoLabel' onChange={(e) => setTodoLabel(e.currentTarget.value)} />
      <label htmlFor='todoDesc'>Todo description</label>
      <input type='text' name='todoDesc' onChange={(e) => setTodoDesc(e.currentTarget.value)} />
      <button type='submit' onClick={addTodo}>
        Add Todo
      </button>
    </form>
  );
};

export default Form;
