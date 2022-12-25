import withCounter from './withCounter';

const HoverCounter = ({ count, incrementCount }) => {
    return <h3 onMouseOver={incrementCount}>Hovered {count} times</h3>;
};

export default withCounter(HoverCounter);
