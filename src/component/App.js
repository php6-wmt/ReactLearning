import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            text: props.text,
            author: {
                name: props.author.name,
                text: props.author.text
            }

        }
    }

    abc() {
    this.setState({
        text: this.state.text + '123456789'
    })
    }

    render() {
        return (
            <div className="Comment">
                <div>
                    <div>
                        name : {this.state.author.name}<br/>
                        detail : {this.state.author.text}
                    </div>
                </div>
                <div> Detail :{this.state.text}</div>
                <div>
                    Date : {this.state.date.toLocaleTimeString()}
                </div>

                <hr/>
                <button onClick={this.abc.bind(this)}>Click me</button>
            </div>
        );
    }
}


class App3 extends React.Component {
    render() {
        return (

            <div>
                <h1>Hello Header {this.props.id}</h1>
            </div>
        );
    }
}

export {Comment, App3};
