import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// Search component created as a class
//
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            weatherIcon: "sunny",
            realTemp: 0,
            weatherText: "YOLO",
        };

        this.tick = this.tick.bind(this);
        this.refreshWeather = this.refreshWeather.bind(this);
        this.updateWeather = this.updateWeather.bind(this);
        this.translateIcon = this.translateIcon.bind(this);
    }

    componentDidMount() {
        //  Set time update
        this.intervalID = setInterval(
            () => this.tick(), 1000 * 60 * 60
        );

        this.refreshWeather();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    //  Update time here
    tick() {
        //  Get time
        this.refreshWeather();
    }

    translateIcon(icon){
        let transIcon = 'sunny';

        if (icon < 3) {
            transIcon = 'sunny';
        }
        else if (icon < 5) {
            transIcon = 'partial-clouds';
        }
        else if (icon < 8) {
            transIcon = 'cloudy';
        }
        else if (icon < 12) {
            transIcon = 'cloudy-lots';
        }
        else if (icon < 15) {
            transIcon = 'rain';
        }
        else if (icon < 19) {
            transIcon = 'rain-lots';
        }
        else if (icon < 30) {
            transIcon = 'snow';
        }
        else if (icon < 31) {
            transIcon = 'sunny';
        }
        else if (icon < 32) {
            transIcon = 'snow';
        }
        else if (icon < 33) {
            transIcon = 'cloudy';
        }
        else if (icon < 35) {
            transIcon = 'night';
        }
        else if (icon < 39) {
            transIcon = 'cloudy-night';
        }
        else if (icon < 43) {
            transIcon = 'showers';
        }
        else if (icon < 45) {
            transIcon = 'snow';
        }
        else {
            transIcon = 'sunny';
        }

        return transIcon;
    }

    updateWeather(weather) {
        let temp = weather.Temperature.Metric.Value;
        let realTemp = weather.RealFeelTemperature.Metric.Value;
        let weatherIcon = this.translateIcon(weather.WeatherIcon);
        let weatherText = weather.WeatherText;

        this.setState({
            temp,
            realTemp,
            weatherIcon,
            weatherText
        })
    }

    refreshWeather() {
        $.getJSON('http://dataservice.accuweather.com/currentconditions/v1/349727', {
            apikey: 'YmUwlkHzWRIYGPR7iXm3RW73y2QV63IE',
            language: 'en-us',
            details: true
        }).then(
            (response) => {
                console.log(response);
                this.updateWeather(response[0]);
            },
            (err) => {
                console.log(err.responseText);
            });
    }

    render() {

        return (
            <div className="weather">
                <div className="overview">
                    <div className="icon">
                        <img className="icon-img" src={"public/images/weather/" + this.state.weatherIcon + ".svg"}/>
                    </div>
                    <div className="temp">
                        {this.state.temp} °C
                        <div className="weather-text">
                            {this.state.weatherText}
                        </div>
                    </div>
                </div>
                <div className="real-temp">
                    Real Feel {this.state.realTemp} °C
                </div>
            </div>
        );
    }
}

export default Weather;
