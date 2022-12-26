import React, { createContext, useReducer } from 'react';
import ReducerA from './ReducerA/ReducerA';

export const countContext = createContext();

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

const ReducerWithContext = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Reducer With Context</h2>
            <h2>Count {count.counter}</h2>
            <countContext.Provider value={{ countDispatch: dispatch }}>
                <ReducerA />
            </countContext.Provider>
        </div>
    );
};

export default ReducerWithContext;
