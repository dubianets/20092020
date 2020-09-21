import React, {useState} from "react";

export default function (props){

    const [value, setValue] = useState("")

    const inputCounter = (event) => {
        setValue(+(event.target.value));
    }

    const addInputCounter = () => {
        props.addCounter(value);
        setValue("");
    }

    return(
     <div>

         <button onClick={addInputCounter}>add counter</button>
         <button onClick={()=>props.refreshAll()}>refresh all</button>
         <input type="text" onChange={inputCounter} value={value}/>


     </div>
    )
}