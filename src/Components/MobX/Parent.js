import React from 'react';
import Child from './Child';

function Parent () {
    return (
        <div className="Parent">
            Me Parent
            <Child/>
        </div>
    );
}

export default Parent;