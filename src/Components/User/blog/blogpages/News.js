import React, { useState, useEffect } from 'react'
import BlogBox from './BlogBox'
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-elastic-carousel";
import './blogBox.css'
import '../blog.css'
import BlogDetails from './BlogDetails';
import { Redirect } from 'react-router-dom';


const breakPoints1 = [
    { width: 200, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 800, itemsToShow: 1 },
    { width: 1500, itemsToShow: 1 },
    { width: 1800, itemsToShow: 1 },
];
const breakPoints4 = [
    // { width: 1, itemsToShow: 1 },
    // { width: 250, itemsToShow: 2 },
    // { width: 0, itemsToShow: 2 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 4 },
    { width: 1800, itemsToShow: 4 },
];
const breakPoints3 = [
    // { width: 1, itemsToShow: 1 },
    // { width: 250, itemsToShow: 2 },
    // { width: 0, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
    { width: 1800, itemsToShow: 3 },
];
const breakPoints2 = [
    // { width: 1, itemsToShow: 1 },
    // { width: 250, itemsToShow: 2 },
    // { width: 0, itemsToShow: 2 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 2 },
    { width: 1000, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1400, itemsToShow: 2 },
];

const News = ({ blogData, setCurrentSection, blogID,theme }) => {
    const [BlogData, setBlogData] = useState(blogData)
    const [BlogID, setBlogID] = useState()
    // const blogID = () => {

    // }
    function showBlog(key) {
        setBlogID(key)
        blogID(key)
        setCurrentSection(2);

        //   return   <BlogDetails id={id} />;
    }


    return (
        <div className="news_box" style={theme===true?{color:"black"}:{color:"white"}} >
            {BlogData != "" ?
                
                <Carousel  breakPoints={window.innerWidth > 1230 ? breakPoints4 : (window.innerWidth > 990 ? breakPoints3 : (window.innerWidth > 730 ? breakPoints2 : breakPoints1))}>
                    {/* {blogData.map((data, index) => ())} */}
                    {blogData && blogData.map((val, key) => (
                        <div onClick={() => showBlog(key)}  >
                            <BlogBox theme={theme} index={key} updated_at={val.updated_at} title={val.title} description={val.description} img={val.image.url} />
                        </div>
                    ))}

                </Carousel>
                :
                < div>
                    <h1>Nothing to show</h1>
                    <h1>please wait</h1>
                </div>
            }

        </div>
    )
}

export default News
