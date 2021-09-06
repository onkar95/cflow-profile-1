import React from 'react'
import "./Card.css"
function Card({theme, option, img,name}) {
    return (
        <div className="service-card-container"
        style={{border:(theme && option===name)?"0px":(!theme && option===name)?"2px solid #ffb600":"",
        backgroundColor:(theme && option===name)?"#ffb600":(theme)?"#F0F0F0":""}}>
            <img src={img} className="service-card-image"/>
               {name}
        </div>
    )
}

export default Card
