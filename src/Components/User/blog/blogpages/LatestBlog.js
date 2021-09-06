import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../blog.css"

const LatestBlog = ({ blog ,blogID}) => {
    // console.log(blog);
    const [latestBlog, setLatestBlog] = useState([])
    const [PostedDay, setPostedDay] = useState();

    const length = blog.length;
    blogID(length - 1);
    useEffect(async () => {
        if (blog!="") {
            var currentDate = new Date();
            const blogUpdatedAt = blog[length-1].updated_at;
            var blogUpdatedDate = new Date(blogUpdatedAt);
            var updatedDay = blogUpdatedDate.getDate();
            var currentDay = currentDate.getDate();
            setPostedDay(currentDay - updatedDay);
        }
    }, [])
    return (
        <div>
            <div className="latestBlog_box" style={{ backgroundImage: `url(http://localhost:1337${blog[length - 1] && blog[length - 1].image.url})` }} >
                <div>
                    {/* <img src={``} alt="" /> */}
                    <div className="innertext">
                        <h2>{blog[length - 1] && blog[length - 1].title}</h2>
                        <hr />
                        <p>{blog[length - 1] && blog[length - 1].description}</p>
                        <div className="bottom-of-box">
                            <div>
                                posted {PostedDay} days ago
                            </div>
                            <div className="show-btn">
                                <button  >Read more</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LatestBlog
