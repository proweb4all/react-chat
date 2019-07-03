import React from 'react';

const Welcome = ({name, children}) => {
    return (
        <h1>{`Hello, ${name} ${children}`}</h1>
    )
}
export default Welcome;