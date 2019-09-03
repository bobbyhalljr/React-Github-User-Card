import React from 'react';
import axios from 'axios';

import Card from './Card';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/bobbyhalljr/followers')
    .then(res => this.setState({ users: res.data }))
    // .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
       <h1 className='title'>Github Followers</h1>
       {/* {this.state.users.map(user => {
         return (
           <>
          <img src={user.avatar_url} />
          <h3>{user.login}</h3>
          <h4>{user.url}</h4>
         </>
         )
       })} */}
       <Card users={this.state.users}/>
      </div>
    );
  }
}

export default App;
