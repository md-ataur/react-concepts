import React from 'react';
import logo from '../../../logo.svg';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img
                width="100px"
                src={logo}
                style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
            />
        );
    }
}

export default Cat;
