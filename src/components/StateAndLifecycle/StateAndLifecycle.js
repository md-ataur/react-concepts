import React from 'react';

class StateAndLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // This function calls after component has been rendered to the real dom
    componentDidMount() {
        this.clockTimer = setInterval(() => {
            console.log('running');
            this.tick();
        }, 1000);
    }

    // This function will call after the component unmount
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <>
                <h1>
                    <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
                </h1>
            </>
        );
    }
}

export default StateAndLifecycle;
