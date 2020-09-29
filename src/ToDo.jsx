import React, {useState} from "react";


export default function ToDo(props){

        const [newTitle, setNewTitle] = useState('')
    const [editMode, setEditMode] = useState(false)

    const editButtonHandler = () => {
            props.editTodo(newTitle, props.todo.id);
        setNewTitle('')
    }

    return(
        <div>

            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button onClick={() => props.deleteToDo(props.todo.id)}>delete</button>
            <button disabled={props.index === 0} onClick={() => props.moveToDo(props.index, props.index-1)}>up</button>
            <button disabled={props.isLast} onClick={() => props.moveToDo(props.index, props.index+1)}>down</button>

            <button onClick={() => setEditMode(!editMode)}>edit</button>

            {editMode &&
                <>
            <label>title:</label>
            <input value={newTitle} type='text' onChange={(e)=> setNewTitle(e.target.value)}/>
            <button onClick={editButtonHandler}>update</button>
            </>
            }

        </div>
    )
}