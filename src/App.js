import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList' ;
import businessess from './components/Business/businessess.js'

class App extends React.Component {
  searchYelp(term, location, sortBy){
    console.log(`You are searching for ${term}, ${location}, and ${sortBy}`)
  }
  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businessess={businessess} /> 
      </div>
      
    );
  }

}

export default App;
