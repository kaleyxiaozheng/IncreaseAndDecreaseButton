import React, { Component } from 'react';
import './AddtionButton.css';
import { CounterButton } from './Button';

export class AddtionButton extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }

    increaseByOne = () => {
        this.setState({ number: this.state.number + 1 });
    }

    decreaseByOne =() => {
        this.setState({ number: this.state.number -1 });
    }

    render() {
        return (
            <div className="bodyArea">
                <p className="numberArea">{this.state.number}</p>
                <p><CounterButton className="buttonArea" onClick={this.increaseByOne} label="+1"></CounterButton></p>
                <p><CounterButton className="buttonArea" onClick={this.decreaseByOne} checkValue={this.state.number <= 0} label="-1"></CounterButton></p>
            </div>
        );
    }
}