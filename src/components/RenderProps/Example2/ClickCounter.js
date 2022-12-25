import React from 'react';

class ClickCounter extends React.Component {
    render() {
        const { count, handleCount } = this.props;
        return (
            <div>
                <button onClick={handleCount}>Count {count}</button>
            </div>
        );
    }
}

export default ClickCounter;
