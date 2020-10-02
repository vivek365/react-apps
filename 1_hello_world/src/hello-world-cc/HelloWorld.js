import React, { Component } from 'react';
import './HelloWorld.css';

export default class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toString()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick = () => {
        this.setState({
            date: new Date().toString()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    click = () => {
        alert('clicked from class component.');
    }

    clickWithParam = (param) => {
        alert('clicked from class component with param: ' + param);
    }

    render() {
        return <>
            <h1 className="pointer" onClick={this.click}>Hello World Using {this.props.name}</h1>
            <button className="btn pointer" onClick={() => this.clickWithParam('vivek')}>Click with Param</button>
            <br />
            <br />
            {this.state.date}
        </>
    }
}