import React, { Component } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  onGreet() {
    alert('Hello!');
  }

  render() {
    let someData = {
      hobbies: ['JavaScript', 'Guitar'],
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="HOME"></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={'Jack'}
              initialAge={69}
              someData={someData}
              greet={this.onGreet}
            >
              <p>This paragraph was injected from outside the component</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
