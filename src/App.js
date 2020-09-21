import React, {useState} from 'react';
import ButtonPanel from "./ButtonPanel";
import ControlPanel from "./ControlPanel";


function App() {

    const [counters, setCounters] = useState([0]);

    const addCounter = (value) => {
        const arrNewCounter = [...counters];
        value = value  ? value : 0;
        arrNewCounter.push(value);
        setCounters(arrNewCounter);
    }

    const removeCounter = (index) => {
        const arrRemove = counters.filter((el, i) =>{
            return index !== i ? true : false; }
        )
        setCounters(arrRemove);
    }

    const changeValue = (index, val) => {
        const arrChange = counters.map((el, i) => {
            if (index === i) return el + val;
            return el;
        })
        setCounters(arrChange);
    }

    const refreshAll = () => {
        const arrRefresh = counters.map( el => el = 0);
        setCounters(arrRefresh);
     }

    return (

        <div>

            <ControlPanel refreshAll={refreshAll} addCounter={addCounter}/>
            <hr/>

            <div>
                {counters.map((el, index) => <ButtonPanel changeValue={changeValue} addCounter={addCounter} el={el}
                                                          removeCounter={removeCounter}  index={index} key={Math.random()}/>)}
            </div>
        </div>
    );
}

export default App;
