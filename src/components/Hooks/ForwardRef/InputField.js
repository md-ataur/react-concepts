import React from 'react';

const InputField = React.forwardRef(({ type, placeholder }, ref) => {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
});

export default InputField;
