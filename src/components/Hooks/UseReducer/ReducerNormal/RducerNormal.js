import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        default:
            return state;
    }
};

const RducerNormal = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Normal Reducer</h2>
            <h2>Count {count}</h2>
            <button onClick={() => dispatch('decrement')}>Decrement</button>{' '}
            <button onClick={() => dispatch('increment')}>Increment</button>
        </div>
    );
};

export default RducerNormal;
