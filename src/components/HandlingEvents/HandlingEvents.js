import React from 'react';

class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: 'bn-BD' };
    }

    handleClick() {
        console.log(this);
        this.setState({
            locale: 'en-US',
        });
    }

    // Solve (this) problem using arrow function
    /* handleClick = () => {
        console.log(this);
        this.setState({
            locale: 'en-US',
        });
    }; */

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <p>
                    How to use event handler and clear this confusion using bind() or arrow
                    function.
                </p>
                <h1>{this.state.date.toLocaleTimeString(this.state.locale)}</h1>
                <button onClick={this.handleClick}>Click here</button>
                {/* <button onClick={this.handleClick.bind(this)}>Click here</button> */}
            </div>
        );
    }
}

export default HandlingEvents;
