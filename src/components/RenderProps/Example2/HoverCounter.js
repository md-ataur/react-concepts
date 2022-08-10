import React from 'react';

class HoverCounter extends React.Component {
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.handleCount}>Hover Count {this.props.count}</h3>
            </div>
        );
    }
}

export default HoverCounter;
