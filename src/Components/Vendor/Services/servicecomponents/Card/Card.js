import React from 'react'
import "./Card.css"
function Card({img,name}) {
    return (
        <div className="service-card-container">
            <img src={img} className="service-card-image"/>
               {name}
        </div>
    )
}

export default Card
