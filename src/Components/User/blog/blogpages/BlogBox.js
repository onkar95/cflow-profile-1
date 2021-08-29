import React, { useEffect, useState } from 'react'
import Like from '@material-ui/icons/Favorite';
import "./blogBox.css";

const BlogBox = ({title,description,updated_at,img,index,theme}) => {
    const [PostedDay, setPostedDay] = useState();

    // console.log(props.title);
    useEffect(async () => {
        // if (updated_at!="") {
            // await postedDate();
            var currentDate = new Date();
            // const blogUpdatedAt = blogData[props.index].updated_at;
        // console.log(updated_at);
            var blogUpdatedDate = new Date(updated_at);
            var updatedDay = blogUpdatedDate.getDate();
            var currentDay = currentDate.getDate();
            setPostedDay(currentDay - updatedDay);
        // }
    }, [])
    return (
        <div  >
            <div className="boxes" id={index} style={theme===true?{color:"black"}:{color:"white"}} >
                <div className="box_title" >
                    <span >posted {PostedDay} day ago</span>
                    <h2>{title}</h2>
                </div>
                <div className="box_img">
                    <img src={`http://localhost:1337${img}`} alt=" is loading"></img>
                </div>
                <div className="box_text">
                    <p >{ description}</p>
                </div>
                <div className="box_button">
                    <button >
                    show more
                    </button>
                    <a href="">
                        show more
                    </a>
                </div>
            </div>
                <hr style={{color:"wheat",margin:"0 5px"}}/>
        </div>
    )
}

export default BlogBox
