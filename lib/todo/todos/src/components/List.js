import React from 'react';

const List = ({ list, setList }) => {


    const complete = (index) => {
        const newList = [...list]
        newList[index].complete = true
        setList(newList)
    }

    return (
        <div>
            {list.map((item, index) => {
                return(
                    <div key={index}>
                        {
                            item.complete ? 
                                <span className="complete">{item.todo}</span> 
                                : <span>{item.todo}</span>
                        }
                        <button onClick={() => {complete(index)}}>Mark as Complete</button>
                    </div>
                )
            })}
        </div>
    );
};

export default List;