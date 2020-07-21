import React from "react";
import './BusinessList.css';
import Business from "../Business/Business"

const BusinessList = ({businessess}) =>{
    return (
        <div className="BusinessList">
            {businessess.map((user, i)=>{
                return (<Business 
                key={i}
                imageSrc ={businessess[i].imageSrc}
                name={businessess[i].name}
                address1={businessess[i].address1}
                address2={businessess[i].address2}
                address3={businessess[i].address3}
                city={businessess[i].city}
                state={businessess[i].state}
                zipCode={businessess[i].zipCode}
                category={businessess[i].category}
                rating={businessess[i].rating}
                reviewCount={businessess[i].reviewCount}/>)

            })}
        </div>
    )
}

export default BusinessList;