import React, {Component } from 'react';
import HighScore from './HighScore';
import './css/style.css'

class Application extends Component {
constructor(props){
    super(props);
    this.state = {
        count: 0,
        overTen :false
    }
}
// componentWillMount(props, state){

// }
// componentDidMount(props, state){
//     console.log("Mounted with ", props, state)
// }
// componentWillReceiveProps(props){

// }
// componentWillUpdate(props, state){
//     if(this.props.name !== props.name){
//         do something
//     }
// }
// componentDidUpdate(props,state){

// }
handleClick = ()=> {
    this.setState({count:this.state.count +1})
    console.log("Clicked");
}


componentDidUpdate(props, state){
    if(this.state.count > 10 && this.state.count !== state.count && !this.state.count){
        console.log("updating over ten");
        this.setState({overTen: true});
    }
}

    render(){
        let name = "Nick";
        let {count} = this.state;
        return (
            <div>

            <h1>You clicked the button {count} times</h1>
            
            <h1>Hello {name}</h1>
            <h2>Good morning</h2>

            <HighScore/>
            {/* {(this.state.overTen) ?
            <h3>Beat high score of 10!</h3>
            : null
             } */}
            <button onClick={(e) => this.handleClick()}> Click me</button>
            </div>
            
        
        );
    }
}

export default Application;

