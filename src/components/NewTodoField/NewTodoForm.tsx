import { useState } from 'react';

type Props = {
  newTodoField: React.RefObject<HTMLInputElement>,
  onAdd: (title: string) => void,
  isAdding: boolean,
};

export const NewTodoForm:React.FC<Props> = ({
  newTodoField,
  onAdd,
  isAdding,
}) => {
  const [title, setTitle] = useState('');

  return (
    <form onSubmit={() => {
      onAdd(title);
      setTitle('');
    }}
    >
      <input
        disabled={isAdding}
        data-cy="NewTodoField"
        type="text"
        ref={newTodoField}
        value={title}
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </form>
  );
};