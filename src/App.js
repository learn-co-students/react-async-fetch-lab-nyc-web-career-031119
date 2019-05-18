// create your App component here
import React from 'react'

class App extends React.Component{
  state = {people: []}

  componentDidMount(){
    fetch(`http://api.open-notify.org/astros.json`)
      .then(res => res.json())
      .then(data => {this.setState({people: data.people})})
  }

  render(){
    console.log(this.state.people)
    return this.state.people.map(people => {
       <div>{people.name}</div>
      console.log(people.name)
    })
  }
}
export default App
