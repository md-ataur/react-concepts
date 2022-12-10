import React from 'react';

class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return (
            <>
                <h4>
                    Props and composition give you all the flexibility you need to customize a
                    component’s look and behavior in an explicit and safe way.
                </h4>
                <hr />
                {this.props.children({ addEmoji: this.addEmoji })}
            </>
        );
    }
}

export default Emoji;
