// import React from 'react'
import React, { useEffect, useState } from "react";
import "./blog.css"
import { Row, Column } from "../Styled/Styled";
// import BricksEstimate from './SideMenuEstimate/BricksEstimate'
// import CPWDManual from './SideMenuEstimate/CPWDManual'
// import FloorEstimate from './SideMenuEstimate/FloorEstimate'
// import PaintingEstimate from './SideMenuEstimate/PaintingEstimate'
// import PlasterEstimate from './SideMenuEstimate/PlasterEstimate'
// import Pcc_Ecc_Calculation from './SideMenuEstimate/Pcc_Ecc_Calculation'
// import SideMenu from "./SideMenuEstimate/SideMenu.js";
// import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import AllBlog from "./blogpages/AllBlog";
import BlogSections from "./blogpages/BlogSections";
import BlogDetails from "./blogpages/BlogDetails";
import axios from "axios";


function Blog({theme, setCurrentSectionRequest, site, getAllVendor, currentSection, setCurrentSection, setCurrentSectionProfile }
) {
    const [blogData, setBlogData] = useState([]);
    const [IdOfBlog, setIdOfBlog] = useState()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [openSaved, setOpenSaved] = useState(false);


    //  axios.get(`http://localhost:1337/articles`)
    //      .then(data => {
    //         //  console.log(data)
    //          setBlogData(data)
    //      })
    const getBlogData = async () => {

        await axios.get(`http://localhost:1337/articles`)
         .then(blog => {
            //  console.log(blog)
             setBlogData(blog.data)
         })
    }
    const blogID = (id) => {
        setIdOfBlog(id)
        // console.log(id);
    }
    // console.log(IdOfBlog);
    
    useEffect(() => {
        getBlogData()
        setCurrentSection(0);
    }, [])
    
    return (
        <div className="blog">
            {currentSection === 0 && <BlogSections theme={theme} blogID={blogID} blogData={blogData} setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest} site={site} handleClickOpen={handleClickOpen} />}
            {currentSection === 1 && <AllBlog theme={theme} blogID={blogID} IdOfBlog={IdOfBlog} blogData={blogData} setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest} site={site} handleClickOpen={handleClickOpen} />}
            {currentSection === 2 && <BlogDetails theme={theme} blogID={blogID} IdOfBlog={IdOfBlog} blogData={blogData} setCurrentSection={setCurrentSection} setCurrentSectionProfile={setCurrentSectionProfile} setOpenSaved={setOpenSaved} setCurrentSectionRequest={setCurrentSectionRequest} site={site} handleClickOpen={handleClickOpen} />}
        </div>

    )
}

export default Blog



