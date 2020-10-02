import React from 'react';
function HelloWorld(props) {
    function click() {
        alert('clicked from functional component.');
    }
    return <h1 onClick={click} style={{ cursor: 'pointer' }}>Hello World Using {props.name}</h1>
}
export default HelloWorld;