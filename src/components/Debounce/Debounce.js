import React from 'react';

const Debounce = () => {
    const myDebounce = (callback, delay) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer); // if the timer is still running then clear timeout
            timer = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };

    const handleChange = myDebounce((e) => {
        console.log(e.target.value);
    }, 1000);

    return (
        <div>
            <h4>Debounce</h4>
            <hr />
            <input onChange={handleChange} type="text" />
        </div>
    );
};

export default Debounce;
