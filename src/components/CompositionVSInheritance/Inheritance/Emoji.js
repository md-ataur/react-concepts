import React from 'react';

class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'This is my parent component';

        if (override) text = override;

        return (
            <>
                <h4>Why React recommend using composition instead of inheritance.</h4>
                <p>
                    1. Components are tightly coupled. It means dependent one component to another
                    component
                </p>
                <p>2. From child, it's not clear what parent does</p>
                <p>3. Not clear about the child parent relation</p>
                <p>4. Future commpnents are tightly coupled</p>
                <hr />
                <div>{text}</div>
            </>
        );
    }
}

export default Emoji;
