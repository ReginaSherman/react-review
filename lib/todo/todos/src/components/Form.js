import React from 'react';

const Form = ({ todo, setTodo, list, setList }) => {

    const updateTodo = (event) => {
        setTodo({complete: false, todo: event.target.value})
    }

    const addTodo = (event) => {
        event.preventDefault()
        const newList = [...list, todo]
        setList(newList)
        setTodo({...todo, todo: ''})
    }

    return (
        <form onSubmit={addTodo}>
            <span>To Do:</span>
            <input type="text" onChange={updateTodo} value={todo.todo}/>
            <button>Save</button>
        </form>
    );
};

export default Form;