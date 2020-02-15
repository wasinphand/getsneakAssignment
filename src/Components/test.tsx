import React from 'react';
import {myContext} from '../index';

const Test = () => {
    console.log(React.useContext(myContext)[1])
    return (
        <div>
            
        </div>
    );
};

export default Test;