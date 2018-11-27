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
            },
            isToggleOn: true

        };
        this.handleClick = this.handleClick.bind(this);
    }


    abc() {
        this.setState((state, props) => ({
            text: state.text + props.author.name
        }))
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
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
                    Date : {this.state.date.toLocaleDateString()}
                </div>

                <hr/>
                <button onClick={this.abc.bind(this)}>Click me</button>
                <hr/>

                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <hr/>

                <button onClick={this.props.fun}> Abc</button>
            </div>
        );
    }
}


class App3 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    componentWillMount() {
        console.log('Will Mount');
    }

    componentDidMount() {
        // console.log('did Mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillReceiveProps(a) {
        console.log('Receive');

    }

    shouldComponentUpdate(p, s) {
        console.log('Update?');

    }

    componentWillUpdate(p, s) {
        console.log('Will Update');

    }

    componentDidUpdate(p, s) {
        console.log('Did Update');

    }


    componentWillUnmount() {
        console.log('unmount')
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button onClick={this.componentWillUnmount.bind(this)}>Change Header</button>

            </div>
        );
    }


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: props.id,
    //         changeLink : "fjhgdj",
    //         homeMounted: true
    //     }
    // }
    // //
    // // componentWillMount() {
    // //
    // // }
    // //
    // // componentDidMount() {
    // //
    // // }
    // //
    // // componentWillReceiveProps(a) {
    // //
    // // }
    // //
    // // shouldComponentUpdate(p, s) {
    // //
    // // }
    // //
    // // componentWillUpdate(p, s) {
    // //
    // // }
    // //
    // // componentDidUpdate(p, s) {
    // //
    // // }
    // //
    // // componentWillUnmount() {
    // //
    // // }
    // //
    // // onChangeMount() {
    // //     this.setState({
    // //         homeMounted: !this.state.homeMounted
    // //     })
    // //
    // // }
    //
    // // onChangeLink() {
    // //     this.props.changeLink(this.state.id);
    // //    // this.setState({
    // //    //     id: "Book  Detail"
    // //    // })
    // // }
    //
    //
    // onHeaderChange(event) {
    //     this.setState({
    //         id: event.target.value
    //     })
    // }
    // render() {
    //     let data = '';
    //     if (this.state.homeMounted) {
    //         data = <h1>{this.state.id}</h1>
    //
    //     }
    //     return (
    //
    //         <div>
    //             {data}
    //             <input type="text" value={this.state.id} onChange={(event) => this.onHeaderChange(event)}/>
    //             <button onClick={this.onChangeLink.bind(this)}> Change</button>
    //             <hr/>
    //             <button onClick={this.onChangeMount.bind(this)}>Change Header</button>
    //         </div>
    //
    //        // {/*/!* <div>*/}
    //        //      {/*<h3>{this.state.id}</h3>*/}
    //        //      {/*<input type="text" value={this.state.changeLink} onChange={(event) => this.onHeaderChange(event)}/>*/}
    //        //       {/*<button onClick={this.onChangeLink.bind(this)}> Change</button>*/}
    //        //      {/*<button onClick={this.onChangeLink.bind(this)}> Change Header</button>*/}
    //        //  {/*</div>*!/*/}
    //
    //
    //     );
    // }
}

export {Comment, App3};
