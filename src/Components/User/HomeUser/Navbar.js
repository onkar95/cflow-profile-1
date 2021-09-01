import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import "./HomeUser.css"

const Navbar = ({ sections, currentSection, setCurrentSection, sections_logo_black, sections_logo_white, setIsToggled }) => {
    return (
        <div className="home_user_sections">
                {
                    sections.map((section, index) => (
                        <div className="home_user_section" style={currentSection === index ? {color: "#ffb600" } : { }} onClick={() => setCurrentSection(index)} key={index} >
                            {section}
                        </div>

                    ))
                }
        </div>

    )
}

export default Navbar
