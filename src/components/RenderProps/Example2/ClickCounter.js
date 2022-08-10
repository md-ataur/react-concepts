import React from 'react';

class ClickCounter extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleCount}>ClickCount {this.props.count}</button>
            </div>
        );
    }
}

export default ClickCounter;
