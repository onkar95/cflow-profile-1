import React, { useState } from 'react'
import BlogBox from './BlogBox'
import '../blog.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const AllBlog = ({  blogData, setCurrentSection, blogID,theme }
) => {
    const handleClick = () => {
        setCurrentSection(0)
    }
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
        <>
            <div className="backArrow" onClick={handleClick}>
                <span>
                    <ArrowBackIosIcon />
                </span>
                <h4>back</h4>
            </div>
            <div className="allBlogs">
                {
                    blogData && blogData.map((val, key) => (
                        <div onClick={() => showBlog(key)}>
                            <BlogBox theme={theme }index={key} updated_at={val.updated_at} title={val.title} description={val.description} img={val.image.url} />
                        </div>))
                }
            </div>
        </>
    )
}

export default AllBlog
