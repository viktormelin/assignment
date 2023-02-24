import { Todo } from '../../models/todoModel';
import './index.scss';

const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <div className='todo'>
      <p className='todo__label'>{todo.label}</p>
      <p className='todo__desc'>{todo.desc}</p>
    </div>
  );
};

export default TodoCard;
