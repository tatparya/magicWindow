import React from 'react';
import ReactDOM from 'react-dom';
// Search component created as a class
//
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "No one shall ever know",
            date: "YOLO",
            weekDay: "LEWL",
            am: "am"
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        //  Set time update
        this.intervalID = setInterval(
            () => this.tick(), 1000
        );

        this.tick();
    }

    getDayOfWeek(day) {
        let weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return weekdays[day];
    }

    getDay() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        let months = [
            "January",
            "Feburary",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        return `${months[month]} ${day} ${year}`;
    }

    getTime() {
        let date = new Date();
        let hours = date.getHours()%12;
        let mins = date.getMinutes();
        let am = (date.getHours() < 12) ? "am" : "pm";

        return {
            time: `${(hours != 0) ? hours : "12"}:${(mins < 10) ? "0" : ""}${mins}`,
            am
        };
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    //  Update time here
    tick() {
        //  Get time
        let {time: newTime, am: newAm} = this.getTime();
        //  Get Date
        let newDate = this.getDay();
        //  Get Day
        let newDay = this.getDayOfWeek(new Date().getDay());

        this.setState(
            {
                time: newTime,
                am: newAm,
                weekDay: newDay,
                date: newDate
            }
        );
    }

    render() {
        return (
            <div className="clock">
                <div className="weekday">
                    {this.state.weekDay}
                </div>
                <div className="date">
                    {this.state.date}
                </div>
                <div className="time">
                    {this.state.time}<span className="am">{this.state.am}</span>
                </div>
            </div>
        );
    }
}

export default Clock;
