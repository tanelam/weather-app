import React, { Component } from "react"

import WeatherForm from "../Components/WeatherForm.js"

class WeatherCointainer extends Component {

  state = {
    weather: ""
  }

  fetchWeather = (input, unit) => (
    // console.log(input , unit)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&id=524901&APPID=b39ae28acdd290f77cda2da796fb862e&type=accurate&units=${unit}`)
    .then(resp => resp.json())
    .then(weather => console.log(weather))
  )

  handleRequest = (input, unit) => {
    this.fetchWeather(input, unit)
  }

  render(){
    return(
      <WeatherForm handleRequest={this.handleRequest}/>
    )
  }
}

export default WeatherCointainer
