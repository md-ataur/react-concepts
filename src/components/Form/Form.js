import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'Javascript' };
    }

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else {
            console.log('nothing');
        }
    };

    render() {
        const { title, text, library } = this.state;

        return (
            <div>
                <h4>Controlled component and uncontrolled component</h4>
                <br />
                <input type="text" value={title} onChange={this.handleChange} />
                <p>{title}</p>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    value={text}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <select onChange={this.handleChange}>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                </select>
            </div>
        );
    }
}

export default Form;
