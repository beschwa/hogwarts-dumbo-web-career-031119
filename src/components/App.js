import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterForm from './FilterForm'
import hogs from '../porkers_data';
import MainContainer from './MainContainer'

class App extends Component {




  render() {
    return (
      <div className="App">
          < Nav />
          <MainContainer hogs={hogs}/>
      </div>
    )
  }
}

export default App;
