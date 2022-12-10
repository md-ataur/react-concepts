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
                <h3> Click {count} </h3>
            </button>
        );
    }
}

export default ClickCounter;
