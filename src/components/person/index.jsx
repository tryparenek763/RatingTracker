import React from 'react';
import data from './person.json'
function Person() {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default Person;
