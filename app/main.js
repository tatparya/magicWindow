import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock';
import Weather from './components/weather';

class App extends React.Component {

    render() {
        return (
            <div>
                <Clock></Clock>
                <Weather></Weather>
            </div>
        );
    }
}

ReactDOM.render( <App />,
    document.getElementById('content')
);
