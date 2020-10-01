import React, { Component } from 'react';

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

    render() {
        return <>
            <h1>Hello World Using {this.props.name}</h1>
            {this.state.date}
        </>
    }
}