import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormDemo from './component/Form'
import App2 from './component/Header';
import {Comment,App3,Demo,KeyDemo} from './component/App';
import * as serviceWorker from './serviceWorker';
//
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// ReactDOM.render(<App2 id="Book"/>, document.getElementById('app1'));

function Multi() {
    function parentC() {
        alert('parent Component')
    }

    return(
        <div>
            {/*<App2 id="Book"/>*/}
            {/*<Comment text={comment.text} author={comment.author} fun={parentC}/>*/}
            {/*<App3 id="Book"/>*/}
            {/*<Demo id="Book"/>*/}
            {/*<KeyDemo  number={numbers}/>*/}
            <FormDemo/>



        </div>
    )

}
const numbers = [1, 2, 3, 4, 5];



const comment = {
    text : 'gjjdfgjnd',
    author : {
        name: 'mansi',
        text: 'abc'
    },};

ReactDOM.render(<Multi/>, document.getElementById('app'));

serviceWorker.unregister();
