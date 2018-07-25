import * as React from 'react';
import './App.css';
import {routes as Routes} from './routes'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
