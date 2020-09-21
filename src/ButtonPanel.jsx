import React from "react";


export default function ButtonPanel(props){

    const index = props.index;

    return(
        <div>

            <button onClick={()=>props.changeValue(index, 10)}>+10</button>
            <button onClick={()=>props.changeValue(index, 1)}>+</button>
            {props.el}
            <button onClick={()=>props.changeValue(index, -1)}>-</button>
            <button onClick={()=>props.changeValue(index, -10)}>-10</button>
            <button onClick={()=>props.removeCounter(index)}>remove</button>

        </div>
    )
}