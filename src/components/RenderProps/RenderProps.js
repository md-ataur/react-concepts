import React from 'react';
import User from './Example1/User';
import ClickCounter from './Example2/ClickCounter';
import Counter from './Example2/Counter';
import HoverCounter from './Example2/HoverCounter';
import Cat from './Example3/Cat';
import MouseTracker from './Example3/MouseTracker';

const RenderProps = () => {
    return (
        <div>
            <h1>Eample 1</h1>
            <User render={(isLoggedIn) => (isLoggedIn ? 'Karim' : 'Guest')} />

            <h1>Eample 2</h1>
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

            <h1>Eample 3</h1>
            <MouseTracker render={(mouse) => <Cat mouse={mouse} />} />
        </div>
    );
};

export default RenderProps;
