import React from "react";
import './BusinessList.css';
import Business from "../Business/Business"

class BusinessList extends React.Component {
    render (){
        return (
            <div className="BusinessList">
                {this.props.businessess.map((user, i)=>{
                    return (<Business 
                    key={i}
                    imageSrc ={this.props.businessess[i].imageSrc}
                    name={this.props.businessess[i].name}
                    address1={this.props.businessess[i].address1}
                    address2={this.props.businessess[i].address2}
                    address3={this.props.businessess[i].address3}
                    city={this.props.businessess[i].city}
                    state={this.props.businessess[i].state}
                    zipCode={this.props.businessess[i].zipCode}
                    category={this.props.businessess[i].category}
                    rating={this.props.businessess[i].rating}
                    reviewCount={this.props.businessess[i].reviewCount}/>)

                })}
            </div>
        )

    }
}

export default BusinessList;