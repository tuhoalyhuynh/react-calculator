import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            sum: 0,
            num1: 0,
            num2: 0
        }
    }

    setNum = (e, num) => {       
        this.setState({ [num]: parseInt(e.target.value)});
    }
      
    getSum = (e) => {
        e.preventDefault();
        let sum = this.state.num1 + this.state.num2
        this.setState({ sum: sum })
    }

    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number" placeholder="Enter your first number" value={this.state.num1} onChange={ (e) => this.setNum(e, 'num1') }/>
                    <br />
                    <span>+</span>
                    <br />
                    <input type="number" placeholder="Enter your first number" value={this.state.num2} onChange={ (e) => this.setNum(e, 'num2') }/>
                    <br />
                    <button onClick={this.getSum}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator