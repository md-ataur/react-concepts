const Text = ({ addEmoji }) => {
    const text = 'I am composition component';

    return <div>{addEmoji ? addEmoji('I love Javascript', '💓') : text}</div>;
};

export default Text;
