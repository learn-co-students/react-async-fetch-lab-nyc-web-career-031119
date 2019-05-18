// create your App component here
import React, { Component } from 'react';

class App extends Component {

  componentDidMount()  {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(astros => {
      console.log(astros);
    })
    .catch(error => {
      alert(error.message);
      console.log(error.message);
    })
  }

  render() {
    return (
      <div>App Component</div>
    )
  }
}

export default App;
