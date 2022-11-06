import React from 'react';

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    };

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h2>Move the mouse around!</h2>
                <p>
                    The current mouse position is ({this.state.x}, {this.state.y})
                </p>
                {/* <Cat mouse={this.state} /> */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default MouseTracker;
