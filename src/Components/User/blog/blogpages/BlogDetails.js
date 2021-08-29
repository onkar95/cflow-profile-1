import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import '../blog.css'
import './blogSection.css'
import News from './News';


const BlogDetails = ({ setCurrentSection, blogData, blogID, IdOfBlog,theme }) => {
    const handleClick = () => {
        setCurrentSection(0)
    }
    const viewAllBlogs = () => {
        setCurrentSection(1)
    }
    console.log(IdOfBlog)
    const length = blogData.length;
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);
    const [Blog, setBlog] = useState(IdOfBlog);

    console.log(Blog);
    const [PostedDay, setPostedDay] = useState();
    console.log(IdOfBlog);

    const Previous = () => {

        setBlog(Blog - 1);
    }
    const Next = () => {
        setBlog(Blog + 1);
    }
    useEffect(() => {
        setBlog(IdOfBlog)
    }, [IdOfBlog])
    useEffect(() => {
        if (Blog >= length - 1) {
            setNext(true)
        }
        else if (Blog <= 0) {
            setPrevious(true)
        } else {
            setNext(false)
            setPrevious(false)

        }

    }, [Blog])

    // console.log(blogData[Blog])
    // console.log(Blog)
  
    useEffect(async () => {
        if (blogData!="") {
            var currentDate = new Date();
            const blogUpdatedAt = blogData[Blog].updated_at;
            var blogUpdatedDate = new Date(blogUpdatedAt);
            var updatedDay = blogUpdatedDate.getDate();
            var currentDay = currentDate.getDate();
            setPostedDay(currentDay - updatedDay);
        }
    }, [Blog])
    // console.log(postedDay)
    // console.log(updatedDay)
    // console.log(currentDay)
    // console.log(blogUpdatedAt)
    // console.log(currentDate)
    return (
        <div>
            <div className="backArrow" onClick={handleClick}>
                <span>
                    <ArrowBackIosIcon />
                </span>
                <h4>back</h4>
            </div>
            <div className="blogDetails" >
                <div className="bolg_img">
                    <img src={`http://localhost:1337${blogData[Blog] && blogData[Blog].image.url}`} alt=" is loading"></img>
                </div>
                <div className="blog_title">
                    <h2>{blogData[Blog] && blogData[Blog].title}</h2>
                    <p>posted {PostedDay}  day ago</p>
                    <p>30 min read</p>
                    <div>Source:cflow</div>
                </div>
                <hr style={{ color: "#514e4e", width: "100%" }} />
                <div className="blog_text">
                    <p>{blogData[Blog] && blogData[Blog].description}</p>
                    <img src={`http://localhost:1337${blogData[Blog] && blogData[Blog].image.url}`} alt="" />
                    <p>{blogData[Blog] && blogData[Blog].description}</p>

                </div>
                <div className="blog_button">
                    <div >
                        <span className="backArrow" >
                            <ArrowBackIosIcon />
                            <button disabled={previous}
                                className={`${previous == true ? "butn_block  " : "butn "}`}
                                onClick={Previous} ><h3>previous</h3></button>
                        </span>
                        <p>name</p>
                    </div>
                    <div style={{ display: next }} >
                        <span className="backArrow"  >
                            <button disabled={next} className={`${next == true ? "butn_block  " : "butn "}`} onClick={Next} ><h3>next</h3></button>
                            <ChevronRightIcon />
                        </span>
                        <p>name</p>
                    </div>

                </div>
            </div>
            <div className="news_div">
                <div className="blog_div_header">
                    <h3>Related Articles</h3>
                    <button onClick={viewAllBlogs}>view all</button>
                </div>
                <div className="news"style={theme===true?{color:"black",backgroundColor:"white"}:{color:"white"}} >
                    <News theme={theme} blogID={blogID} setCurrentSection={setCurrentSection} blogData={blogData} />
                </div>

            </div>
            {/* <DetaileBlog handleClick={handleClick} viewAllBlogs={viewAllBlogs} blogData={blogData }/> */}
        </div>
    )
}

export default BlogDetails
