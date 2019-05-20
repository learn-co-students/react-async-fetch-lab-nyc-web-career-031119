import React from 'react';

class App extends React.Component{
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(console.log())
    .catch(error => {
      alert(error.message)
    });
  };

  render(){
    return(
      <div>App Component</div>
    );
  };
};

export default App;
