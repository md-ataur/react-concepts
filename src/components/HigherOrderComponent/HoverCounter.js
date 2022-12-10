import React from 'react';

class HoverCounter extends React.Component {
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
            <>
                <p>
                    A higher order component is a function that takes a component as parameter and
                    returns a new component.
                </p>
                <p>- Avoid Code duplication</p>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
            </>
        );
    }
}

export default HoverCounter;
