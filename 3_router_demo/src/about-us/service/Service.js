import React from 'react';

function Service(props) {
    let serviceName;
    if (props.name) {
        serviceName = <h3>{props.name}</h3>
    }
    return <>
        <h1>Service {props.match ? props.match.params.id : props.id}</h1>
        {serviceName}
    </>
}

export default Service;