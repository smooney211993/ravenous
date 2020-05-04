import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList' ;
import searchYelpApi from './util/Yelp.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessess:[],
    }
    this.searchYelp = this.searchYelp.bind(this)
  }


  async searchYelp(term, location, sortBy){
   const search = await searchYelpApi(term, location, sortBy)
  
   this.setState({businessess: search})
    
  }
  render(){
    console.log(this.state.businessess)
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} state={this.state.businessess} />
        <BusinessList businessess={this.state.businessess} /> 
      </div>
      
    );
  }

}

export default App;
