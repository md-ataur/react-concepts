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
                <h4>
                    A higher order component is a function that takes a component as parameter and
                    returns a new component. <br /> Whereas a component transforms props into UI, a
                    higher-order component transforms a component into another component.
                </h4>
                <h5>const NewComponent = higherOrderComponent(OriginalComponent);</h5>
                <p>- Avoid code duplication</p>
                <hr />
                <h3 onMouseOver={this.incrementCount}>Hovered {count} times</h3>
            </>
        );
    }
}

export default HoverCounter;
