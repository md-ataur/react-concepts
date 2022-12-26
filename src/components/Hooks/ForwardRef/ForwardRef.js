import React, { useEffect, useRef } from 'react';
import InputField from './InputField';

const ForwardRef = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h4>
                By default, the ref prop only works on HTML elements, not on React components. The
                forwardRef method allows parent components to forward refs to their children.
            </h4>
            <hr />
            <p>
                <InputField ref={inputRef} type="text" placeholder="Enter" />
            </p>
        </div>
    );
};

export default ForwardRef;
