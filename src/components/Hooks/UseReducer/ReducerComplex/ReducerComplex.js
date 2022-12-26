import React, { useReducer } from 'react';

const initialState = {
    counter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + action.value };

        case 'decrement':
            return { counter: state.counter - action.value };

        default:
            return state;
    }
};

const ReducerComplex = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Complex Reducer</h2>
            <div>
                <h2>Count {count.counter}</h2>
                <button onClick={() => dispatch({ type: 'decrement', value: 2 })}>
                    Decrement
                </button>{' '}
                <button
                    onClick={() =>
                        dispatch({
                            type: 'increment',
                            value: 2,
                        })
                    }
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default ReducerComplex;
