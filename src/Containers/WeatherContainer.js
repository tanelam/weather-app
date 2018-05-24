import React, { Component } from "react"

import WeatherForm from "../Components/WeatherForm.js"

class WeatherCointainer extends Component {

  state = {
    weather: ""
  }

  fetchWeather = (input, unit) => (
    // console.log("API KEY", process.env.REACT_APP_WEATHER_API_KEY)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&type=accurate&units=${unit}`)
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
