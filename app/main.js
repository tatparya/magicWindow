import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Clock></Clock>
            </div>
        );
    }
}

ReactDOM.render( <App />,
    document.getElementById('content')
);
