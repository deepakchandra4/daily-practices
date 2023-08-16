import React, { Component } from 'react'

export default class UsingAPI extends Component {

  constructor(props){
    super(props);
    this.state={
      items : [],
      isLoaded : false,
    }
  }

  componentDidMount(){
    const API = 'https://jsonplaceholder.typicode.com/users'
    fetch(API).then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded:true,
          items:json,
        })
    })
  }

  render() {

    var {isLoaded , items} = this.state;

    if(!isLoaded){
      return <h1>Loading..</h1>
    }else{
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name : {item.name} | Email : {item.email}</li>
            ))}
          </ul>
        </div>
      )
    }
  }
}
