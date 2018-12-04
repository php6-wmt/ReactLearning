import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormDemo from './component/Form'
import CFConversion from './component/CFConversion'
import CompositionVsInheritance from './component/CompositionVsInheritance'
import  './component/CompositionVsInheritance.css'
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
            {/*<CompositionVsInheritance/>*/}



        </div>
    )

}
// const numbers = [1, 2, 3, 4, 5];
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-'+ props.color}>
//             {props.children}
//         </div>
//     );
// }
//
// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }


const comment = {
    text : 'gjjdfgjnd',
    author : {
        name: 'mansi',
        text: 'abc'
    },};
// ReactDOM.render(<CFConversion/> , document.getElementById('CFConversion'));
ReactDOM.render(<CompositionVsInheritance /> , document.getElementById('root'));
// ReactDOM.render(<Multi/>, document.getElementById('app'));

serviceWorker.unregister();
