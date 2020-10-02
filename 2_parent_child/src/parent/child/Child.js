import React from 'react';

function Child(props) {

    return <>
        <h1>Child Component</h1>
        <p>Name from parent: {props.name}</p>
        <button onClick={props.parentClick}>Click Parent Function</button> &nbsp;
        <button onClick={() => props.parentClickWithParam('Vivek')}>Click Parent Function With Param</button> &nbsp;
        <button onClick={() => props.changeName('Priyanjali Jain')}>Change Name</button>
    </>;
}

export default Child;