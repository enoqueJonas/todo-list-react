import { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
        <form onSubmit={handleSubmit} className='form-container'>
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                className='input-text'
                onChange={onChange} />
            <button className="input-submit">Submit</button>
        </form>
  );
};
export default InputTodo;