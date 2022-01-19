import React from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

const ToDoItem = (props) => {
    
    return (
        <div>
            <ul className='todo'>
                <li className='title'>This is my first item</li>
           </ul>
        </div>

    )
}

export default ToDoItem



{/* <Card
                body
                color="secondary"
                outline
            >
                <CardTitle tag="h5">
                    {title}
                </CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Button
                </Button>
            </Card> */}