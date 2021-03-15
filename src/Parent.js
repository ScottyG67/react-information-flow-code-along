import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor1: "#FFF",
      childColor2: "#FFF"
    }
  }

  changeColor = (newChildColor1,newChildColor2) => {
    this.setState({
      color: getRandomColor(),
      childColor1: newChildColor1,
      childColor2: newChildColor2
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange = {this.changeColor} color ={this.state.childColor1}/>
        <Child handleColorChange = {this.changeColor} color ={this.state.childColor2}/>
      </div>
    )
  }
}

export default Parent
