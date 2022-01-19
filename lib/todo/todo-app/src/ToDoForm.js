import React, { useState } from 'react'
import { Form, FormGroup, Container, Input, Button } from 'reactstrap'

import ToDoList from './ToDoList'

const ToDoForm = (props) => {
    const { initialState } = props
    const [formState, setFormState] = useState(initialState)
   


    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        setFormState(initialState)
    }

    return (
        <div className='form'>
            <Container>
                <h1>To Do:</h1>
                <Form onSubmit={handleSubmit} className='input-form'>
                    <FormGroup>
                        <Input
                            type='text'
                            placeholder='Add something to this list...'
                            id="newTodo"
                            onChange={handleChange}
                            value={formState.newTodo}  
                        />
                        <Button type='submit'>Save</Button>
                    </FormGroup>
                </Form>
                <ToDoList />
            </Container>
        </div>

    )
}

export default ToDoForm