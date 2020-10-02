import React, { Component } from 'react';
import Child from './child/Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vivek Jain'
        };
    }

    parentClickFn = () => {
        alert('parent function clicked');
    }

    parentClickFnWithParam = (name) => {
        alert('parent function clicked with param: ' + name);
    }

    changeName = (name) => {
        this.setState({ name });
    }

    render() {
        return <>
            <h1>Parent Component</h1>
            <Child name={this.state.name} parentClick={this.parentClickFn} parentClickWithParam={this.parentClickFnWithParam}
                changeName={this.changeName}></Child>
        </>
    }
}

export default Parent;