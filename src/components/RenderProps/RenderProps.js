import React from 'react';
import User from './Example1/User';
import ClickCounter from './Example2/ClickCounter';
import Counter from './Example2/Counter';
import HoverCounter from './Example2/HoverCounter';

const RenderProps = () => {
    return (
        <div>
            <h4>
                Render prop is a pattern for sharing logic between React components using a prop
                whose value is a function. The parent component pass a function to the child
                component as a render props, and the child component calls that function instead of
                implementing its own logic.
            </h4>
            <p>- Avoid code duplication</p>
            <h3>Eample 1</h3>
            <User render={(isLoggedIn) => (isLoggedIn ? 'Karim' : 'Guest')} />
            <hr />

            <h3>Eample 2</h3>
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter count={count} handleCount={incrementCount} />
                )}
            />
            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter count={count} handleCount={incrementCount} />
                )}
            />
        </div>
    );
};

export default RenderProps;
