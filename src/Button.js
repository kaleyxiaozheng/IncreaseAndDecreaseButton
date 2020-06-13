import React from 'react';
import './Button.css';

export const CounterButton = (props)=> {

        return (
            <div >
                <button onClick={props.onClick} disabled={props.checkValue}>{props.label}</button>
            </div>
        );
}