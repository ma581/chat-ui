import React, {Component} from 'react';
import './App.css';
import Chat from "./components/Chat";

class App extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                      crossOrigin="anonymous"/>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Work in progress ✈️</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.</p>
                    </div>
                </div>
                <Chat/>
            </div>
        );
    }
}

export default App;
