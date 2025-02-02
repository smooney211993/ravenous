import React, {useState} from "react";
//import React from 'react'
import "./SearchBar.css"

    const sortByOptions = {
        "Best Match" : 'best_match',
        "Highest Rated" : "rating",
        "Most Reviewed" : "review_count"

    }

 /* class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: " ",
            location : " ",
            sortBy : "best_match"

        }
        
    }
    
    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    
    handleTermChange(event){
        this.setState({term: event.target.value});

    }

    handleLocationChange(event){
        this.setState({location: event.target.value});

    }
    getSortByClass(sortByOption){
        return sortByOption ===this.state.sortBy ? 'active' : ''
      }

      
    handleSortByChange(sortByOption){
        this.setState({ sortBy: sortByOption});
    }

    renderSortByOptions(){
            return Object.keys(sortByOptions).map((sortByOption)=>{
                let sortByOptionsValue = sortByOptions[sortByOption]
                return (<li 
                key={sortByOptionsValue}
                className={this.getSortByClass(sortByOptionsValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}
                 > {sortByOption} </li>)
            });
    }

    render () {
        console.log(`this is the state ${this.state.location}`)
        console.log(`this is the state app ${this.props.state}`)
        return (
        
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className ="SearchBar-fields">
                    <input placeholder="Search Businessess" onChange={(event)=>{this.handleTermChange(event)}}/>
                    <input placeholder="where?" onChange={(event)=>{this.handleLocationChange(event)}}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={(event)=>{this.handleSearch(event)}}>Lets Go</a>
                </div>
            </div>
           )
     }
}
*/

const SearchBar = (props) => {
    const {searchYelp} = props
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
    
   const handleSearch = (event) =>{
        searchYelp(term, location,sortBy);
        event.preventDefault();
    }

    
   const handleTermChange = (event) =>{
        setTerm(event.target.value);

    }

   const handleLocationChange = (event) =>{
        setLocation(event.target.value)

    }
    const getSortByClass =(sortByOption) => {
        return sortByOption ===sortBy ? 'active' : ''
      }

      
    const handleSortByChange = (sortByOption) =>{
        setSortBy(sortByOption)
    }

   const renderSortByOptions =()=>{
            return Object.keys(sortByOptions).map((sortByOption)=>{
                let sortByOptionsValue = sortByOptions[sortByOption]
                return (<li 
                key={sortByOptionsValue}
                className={getSortByClass(sortByOptionsValue)}
                onClick={()=>handleSortByChange(sortByOptionsValue)}
                 > {sortByOption} </li>)
            });
    }

    
        return (
        
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {renderSortByOptions()}
                    </ul>
                </div>
                <div className ="SearchBar-fields">
                    <input placeholder="Search Businessess" onChange={handleTermChange}/>
                    <input placeholder="where?" onChange={handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={handleSearch}>Lets Go</a>
                </div>
            </div>
           )
     
}


export default SearchBar;