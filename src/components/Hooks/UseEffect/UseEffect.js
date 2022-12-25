import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Interval is running');
            tick();
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const clickHandler = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <button onClick={clickHandler}>Count {count}</button>
        </div>
    );
};

export default UseEffect;
