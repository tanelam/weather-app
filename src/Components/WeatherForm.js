import React, {Component} from "react"

class WeatherForm extends Component{

  state = {
    input: "",
    unit: "metric"
  }

  handleSubmit = (event) => {
   console.log(this.state)
    event.preventDefault()
    this.props.handleRequest(this.state.input, this.state.unit)

  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="input" placeholder="Search by city..." onChange={this.handleInputChange}></input>
        <br/>
        <input type="radio" name="unit" value="metric" onChange={this.handleInputChange} checked={this.state.unit === 'metric'}/>
        <label>Celsius</label>
        <br/>
        <input type="radio" name="unit" value="imperial" onChange={this.handleInputChange} checked={this.state.unit === 'imperial'}/>
        <label>Fahrenheit</label>
        <br/>
        <input type="submit"></input>
      </form>
    )
  }
}

export default WeatherForm
