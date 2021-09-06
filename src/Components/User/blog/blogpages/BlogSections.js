import React, { useEffect, useState } from 'react'
// import BlogBox from './BlogBox'
// import PopularBlog from './PopularBlog'
import News from './News'
// import Blogs from './Blogs'
import LatestBlog from './LatestBlog'
import './blogSection.css'
import { Link, Redirect } from 'react-router-dom'

const Blog = ({ setCurrentSection, blogData, blogID, theme }
) => {
    const [IdOfBlog, setIdOfBlog] = useState()
    const length = blogData.length;

    const handelLatestBlog = () => {
        setCurrentSection(2)
        setIdOfBlog(length - 1);
    }
    const viewAllBlogs = () => {
        setCurrentSection(1)
    }
    // console.log(IdOfBlog)

    // const blogID = (id) => {
    //     setIdOfBlog(id)
    //     console.log(id)
    // }

    // console.log(IdOfBlog)

    // useEffect(() => {
    //     if (IdOfBlog) {
    //         setCurrentSection(2)
    //     } else {
    //         setCurrentSection(0)
    //     }
    // }, [IdOfBlog])
    // console.log(blogData);
    return (
        <>
            {blogData != "" ?

                <div className="Blog_section" >
                    <div className="latestBlog" onClick={handelLatestBlog}>
                        <LatestBlog blog={blogData} blogID={blogID} />
                    </div>
                    <div className="popularblog_div">
                        <div className="blog_div_header">
                            <h3>popular blogs:</h3>
                            <button onClick={viewAllBlogs}>view all</button>
                        </div>
                        <div className="news" style={theme === true ? { color: "black", backgroundColor: "white" } : { color: "white" }} >
                            <News theme={theme} blogID={blogID} setCurrentSection={setCurrentSection} blogData={blogData} />
                        </div>
                    </div>
                    <div className="news_div">
                        <div className="blog_div_header">
                            <h3>News:</h3>
                            <button onClick={viewAllBlogs}>view all</button>
                        </div>
                        <div className="news" style={theme === true ? { color: "black", backgroundColor: "white" } : { color: "white" }} >
                            <News theme={theme} blogID={blogID} setCurrentSection={setCurrentSection} blogData={blogData} />
                        </div>

                    </div>
                    <div className="blogs_div">
                        <div className="blog_div_header">
                            <h3>Blogs</h3>
                            <button onClick={viewAllBlogs}>view all</button>
                        </div>
                        <div className="news" style={theme === true ? { color: "black", backgroundColor: "white" } : { color: "white" }} >
                            <News theme={theme} blogID={blogID} setCurrentSection={setCurrentSection} blogData={blogData} />
                        </div>
                    </div>
                </div>
                :
                < div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#2d2d2d", justifyContent: "center", height: "200px" }}>

                    <h1>Loading</h1>
                    <h1>please wait</h1>
                </div>

            }
        </>
    )
}

export default Blog
