import React from 'react';

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <button onClick={this.incrementCount}>
                <span> Click {count} </span>
            </button>
        );
    }
}

export default ClickCounter;
