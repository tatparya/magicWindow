import React from 'react';
import ReactDOM from 'react-dom';
// Search component created as a class
//
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        //  Set time update
        this.intervalID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    //  Update time here
    tick() {
        this.setState({time: new Date().toLocaleString()});
        console.log("Tick")
    }

    render() {
        return (
            <div className="component-clock">
                <h1>The time is {this.state.time}</h1>
            </div>
        );
    }
}

export default Clock;
