import React, {useState} from 'react';
import ToDo from "./ToDo";
import ControlPanel from "./ControlPanel";


function App() {
    const initState = [
        {id: 1, title: 'First', description: 'Learn HTML'},
        {id: 2, title: 'Second', description: 'Learn CSS'},
        {id: 3, title: 'Third', description: 'Learn JS'},
        {id: 4, title: 'Fourth', description: 'Learn React'}
    ]

    const [todos, setTodos] = useState(initState);

    const deleteToDo = (id) => {
        const newList = todos.filter(el => el.id !== id)
        setTodos(newList);
    }

    const moveToDo = (currentIndex, nextIndex) => {
        const newList = [...todos];

        const currentElem = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentElem;
        setTodos(newList)
    }

    const addTodo = (newTitle, newDescription) => {
        const newTodo = {
            id: Math.random(),
            title: newTitle,
            description: newDescription
        }
        const newList = [...todos, newTodo]
        setTodos(newList)
    }

    const editTodo = (newTitle, id) => {
        const newList = todos.map((el, i) => {
            if(el.id === id) return{...el, title: newTitle}

            return el
        })

        setTodos(newList);
    }



    return (

        <div>

            <ControlPanel addTodo={addTodo}/>


            <hr/>

            {todos.map((el, index) => <ToDo key={el.id}
                   editTodo={editTodo}
                isLast={index === todos.length -1}
                index={index} moveToDo={moveToDo}
                 deleteToDo={deleteToDo} todo={el}/>)}

        </div>
    );
}

export default App;
