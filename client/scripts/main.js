import foo from './foo.js';
import { h, render, Component  } from 'preact';
// import { DummyComponent } from './components/dummy-component.jsx'

const vroot = document.querySelector('#demo')

document.getElementById("demo").innerHTML = "this it";
console.log(foo);

render((
    <div id="foo">
        <span>Hello, world!</span>
        <button onClick={ e => alert("hi!") }>Click Me</button>
    </div>
), vroot);

class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

render(<Clock />, vroot);
