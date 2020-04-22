import React from "react";
import "./SearchBar.css"

    const sortByOptions = {
        "Best Match" : 'best_match',
        "Highest Rated" : "rating",
        "Most Reviewed" : "review_count"

    }

class SearchBar extends React.Component {
    renderSortByOptions(){
            return Object.keys(sortByOptions).map((sortByOption)=>{
                let sortByOptionsValue = sortByOptions[sortByOption]
                return <li key={sortByOptionsValue}> {sortByOption} </li>
            });
    }

    render () {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className ="SearchBar-fields">
                    <input placeholder="Search Businessess"/>
                    <input placeholder="where" />

                </div>
                <div className="SearchBar-submit">
                    <a>Lets Go</a>
                    
                </div>
            </div>
           )
     }
}
