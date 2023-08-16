import React, { Component } from "react";

export default class Counter extends Component {

   constructor(props){
    super(props);
    this.state={
      count : 0,
    }
   }
   componentDidMount(){
    
   }

   increment() {
    this.setState({count: this.state.count + 1})
   }
  render() {
    return (
      <div>
        <h1 className="counter">{this.state.count}</h1>
        <button onClick={() => this.increment()}>Add</button>
      </div>
    );
  }
}

