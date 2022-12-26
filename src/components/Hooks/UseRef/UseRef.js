import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h4>
                <p>
                    React doesn't recommended to manipulate the dom element directly by using
                    document.getElementById or document.querySelector. If you want to manipulate the
                    dom element, you can use useRef hook. The useRef is a hook that allows to
                    directly create a reference to the DOM element.
                </p>
            </h4>
            <hr />
            <p>
                <input ref={inputRef} type="text" placeholder="Enter" />
            </p>
        </div>
    );
};

export default UseRef;
