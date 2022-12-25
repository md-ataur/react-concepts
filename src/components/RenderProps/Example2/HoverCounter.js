import React from 'react';

class HoverCounter extends React.Component {
    render() {
        const { count, handleCount } = this.props;
        return (
            <div>
                <h4 onMouseOver={handleCount}>Hover Count {count}</h4>
            </div>
        );
    }
}

export default HoverCounter;
