import React from "react";
import "./SearchBar.css"

    const sortByOptions = {
        "Best Match" : 'best_match',
        "Highest Rated" : "rating",
        "Most Reviewed" : "review_count"

    }

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: " ",
            location : " ",
            sortBy : "best_match"

        }

    }
    getSortByClass(sortByOption){
      return sortByOption ===this.state.sortBy ? 'active' : ''
    }

    handleSortByChange(sortByOption){
        this.setState({ sortBy: sortByOption})
    }

    renderSortByOptions(){
            return Object.keys(sortByOptions).map((sortByOption)=>{
                let sortByOptionsValue = sortByOptions[sortByOption]
                return <li 
                key={sortByOptionsValue}
                className={this.getSortByClass(sortByOptionsValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}
                 > {sortByOption} </li>
            });
    }

    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className ="SearchBar-fields">
                    <input placeholder="Search Businessess"/>
                    <input placeholder="where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Lets Go</a>
                </div>
            </div>
           )
     }
}


export default SearchBar;