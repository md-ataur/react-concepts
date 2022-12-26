import React from 'react';
import ReducerComplex from './ReducerComplex/ReducerComplex';
import RducerNormal from './ReducerNormal/RducerNormal';
import ReducerWithContext from './ReducerWithContext/ReducerWithContext';
import ReducerWithSideEffect from './ReducerWithSideEffect/ReducerWithSideEffect';

const UseReducer = () => {
    return (
        <div>
            <h4>
                useReducer is a state management hook and usually preferable when you have complex
                state logic
            </h4>
            <hr />
            <RducerNormal />
            <ReducerComplex />
            <ReducerWithContext />
            <ReducerWithSideEffect />
        </div>
    );
};

export default UseReducer;
