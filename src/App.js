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
    this.state.people.map(people => {
      console.log(people.name)
    })
    return <div></div>
  }
}
export default App
