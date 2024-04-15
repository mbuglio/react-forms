import React from 'react';

function Box({
    handleRemove,
    id, 
    width = 5, 
    height =5, 
    backgroundColor = 'blue'
}) {
    const remove= () => handleRemove(id);
    return (
        <div>
            <div style={{
                width: `${width}em`,
                height: `${height}em`,
                backgroundColor
            }} />
            <button onClick={remove}>Remove Box!</button>
        </div>
    )
    }

export default Box; 