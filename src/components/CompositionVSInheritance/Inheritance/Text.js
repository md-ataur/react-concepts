/* eslint-disable no-useless-constructor */
import Emoji from './Emoji';

class Text extends Emoji {
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I love Javascript', '💗');

        return super.render(decoratedText);
    }
}

export default Text;
