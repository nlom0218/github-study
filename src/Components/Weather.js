import React from "react";
import axios from "axios";

class Weather extends React.Component {
  state = {
    weather: "loading...",
  };

  getWeather = async () => {
    const {
      data: {
        weather: [{ main: data }],
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=284ec2b148a72a61795ba16c7a6f7fbb&units=metric`
    );
    this.setState({ weather: data });
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { weather } = this.state;
    return <h1>서울의 날씨는 : {weather}</h1>;
  }
}

export default Weather;
