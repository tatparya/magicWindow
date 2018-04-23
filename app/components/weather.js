import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// Search component created as a class
//
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "Lookin bright!"
        };

        this.tick = this.tick.bind(this);
        this.refreshWeather = this.refreshWeather.bind(this);
        this.updateWeather = this.updateWeather.bind(this);
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

    updateWeather(weather) {
    }

    refreshWeather() {
        $.getJSON('http://dataservice.accuweather.com/currentconditions/v1/349727', {
            apikey: 'YmUwlkHzWRIYGPR7iXm3RW73y2QV63IE',
            language: 'en-us',
            details: true
        }).then(
            (response) => {
                console.log(response);
                this.updateWeather(response);
            },
            (err) => {
                console.log(err.responseText);
            });
    }

    render() {
        return (
            <div className="weather">
                YOLO
            </div>
        );
    }
}

export default Weather;
