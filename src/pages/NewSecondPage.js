import React, { Component } from 'react';

export default class NewSecondPage extends Component {
    state = {
        expression: '',
        result: '',
        errorMessage: ''
    }

    onUpdateExpression = evt => {
        this.setState({ expression: evt.target.value });
    };

    onEval = () => {
        try {
            if (!this.state.expression) {
                return;
            }
            const result = eval(this.state.expression);
            this.setState({
                result,
                errorMessage: ''
            });
        } catch (error) {
            this.setState({
                errorMessage: 'Enter a valid expression'
            });
        }
    };

    onClear = () => {
        this.setState({
            expression: '',
            result: '',
            errorMessage: '' 
        });
    }

    render() {
        const {
            expression,
            result,
            errorMessage
        } = this.state;
        return (
            <div className="second-page-parent">
                <div className="input-group mb-3">
                    <span className="input-group-text">Evaluate Expression</span>
                    <input
                        type="text"
                        className="form-control"
                        value={expression}
                        onChange={this.onUpdateExpression}
                        placeholder="Example: 1+2"
                    />
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.onEval}>Get Result</button>
                    <button type="button" className="btn btn-primary" onClick={this.onClear}>Clear</button>
                    <p>Result: {errorMessage || result || <small>Enter an expression to evaluate...</small>}</p>
                </div>
            </div>
        );
    }
}