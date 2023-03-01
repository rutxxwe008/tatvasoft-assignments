import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.clickHandler = this.clickHandler.bind(this);
    
    }

    clickHandler(){
        this.setState((previousState , props) => ({
            count: previousState.count + 1
        }))
        console.log(this.state.count);
    }
  render() {
    return (
      <div>
         <div>{this.state.count}</div>
         <button onClick={this.clickHandler}>Increament button</button>
        </div>
    )
  }
}

export default Counter;