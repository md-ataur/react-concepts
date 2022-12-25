import withCounter from './withCounter';

const ClickCounter = ({ count, incrementCount }) => {
    return (
        <>
            <p>I am calling via HOC</p>
            <button onClick={incrementCount}>
                <span> Click {count} </span>
            </button>
        </>
    );
};

export default withCounter(ClickCounter);
