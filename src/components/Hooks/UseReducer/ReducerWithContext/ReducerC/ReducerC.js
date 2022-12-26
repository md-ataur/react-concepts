import React, { useContext } from 'react';
import { countContext } from '../ReducerWithContext';

const ReducerC = () => {
    const useCountContext = useContext(countContext);
    return (
        <div>
            <div>
                <button
                    onClick={() => useCountContext.countDispatch({ type: 'decrement', value: 1 })}
                >
                    Decrement
                </button>{' '}
                <button
                    onClick={() =>
                        useCountContext.countDispatch({
                            type: 'increment',
                            value: 1,
                        })
                    }
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default ReducerC;
