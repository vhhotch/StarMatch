import React from 'react'
import './App.css';

export default function PlayNumber(props) {
    return (
        <div>
            <button className = "number" 
            onClick = {()=> console.log('Num', props.number)}>
            {props.number}
            </button>
        </div>
    )
}
