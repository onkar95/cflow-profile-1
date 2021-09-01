import React, { useState, useEffect } from 'react'
import "./HomeUser.css"
import NotificationsIcon from '../../../Images/NotificationIcon.svg';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { slide as Menu } from 'react-burger-menu'
// import DarkTheme from "../../../Images/newProfile/Light.png"
import lightIcon from "../../../Images/newProfile/Light.png"
import profileIcon from "../../../Images/newProfile/Profile.png"
import unitConverterIcon from "../../../Images/newProfile/calculator.png"
import helpIcon from "../../../Images/newProfile/Help.png"

const Header = ({ currentSectionProfile, sections, currentSection, setIsUser, LogoImage, setCurrentSection, setCurrentSectionProfile, setIsToggled, getCart, DarkWhite }) => {
    const history = useHistory()

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [helpEnabled, setHelpEnabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(false);

    const handleCart = () => {
        if (userId === undefined) {
            setIsUser(true);
            history.push('/auth-user');
        }
        else {
            setCurrentSection(11);
            getCart();
        }
    }
    const [winsize, setwinsize] = useState(window.screen.width);
    const [winheight, setwinheight] = useState(window.screen.height);
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setwinsize(window.innerWidth)
        }
        else {
            setwinsize(window.innerWidth)
        }
        if (window.innerHeight < 1000) {
            setwinheight(window.innerHeight)
        }
        else {
            setwinheight(window.innerHeight)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        window.addEventListener("resize", handleResize)
        console.log(winsize, winheight, "LandingPageImage")
    }, [window.screen.width, window.screen.height])

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '6%',
            height: '4%',
            left: '3%',
            top: '3%'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '20%',
            width: '10%',
            right: '10%'
        },
        bmCross: {
            background: '#ffb600',
            cursor: "pointer",
            height: '30px'
            // height:'60%'
        },
        bmMenuWrap: {
            // position: 'fixed',
            height: '100%',
            width: '100%',
            left: '0%'
        },
        bmMenu: {
            background: '#2D2D2D',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            overflowY: 'hidden'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }
    const changeTheme = () => {
        if (theme === false) {
            DarkWhite(true)
            setTheme(true);
        } else {
            setTheme(false);
            DarkWhite(false)

        }
    }
    const viewProfile = () => {
        setCurrentSection(14)
    }
    return (
        <div className="home-user-header">
            {winsize < 650 &&
                <Menu styles={styles} disableOverlayClick={false} isOpen={false}>
                    {
                        sections?.map((section, index) => <h3 style={{ cursor: "pointer", width: 'fit-content', color: currentSection === index && !helpEnabled ? '#ffb600' : 'white' }} onClick={() => { setCurrentSection(index); window.scrollTo(0, 0); setHelpEnabled(false); setIsOpen(false); }}>{section}</h3>)
                    }
                    <h3 style={{ cursor: "pointer", width: 'fit-content', color: helpEnabled ? '#ffb600' : 'white' }} onClick={() => { setCurrentSection(4); setCurrentSectionProfile(5); window.scrollTo(0, 0); setHelpEnabled(true); setIsOpen(false); }}>Help</h3>
                </Menu>
            }
            <div className="home-user-logo">
                <img src={LogoImage} className="CF-logo-user" onClick={() => userId ? setCurrentSection(0) : history.push('/')} />
            </div>
            <div className="home-user-help-user">
                <img src={lightIcon} onClick={changeTheme} style={{ width: "30px", height: "30px" }} />
                <img src={unitConverterIcon}  style={{ width: "30px", height: "30px" }} />
                <img src={helpIcon} className="help-icon" style={{ width: "30px", height: "30px" }} onClick={() => { setCurrentSection(14); setCurrentSectionProfile(5) }} />
                {/* <ShoppingCartOutlinedIcon className="shopping-cart" onClick={handleCart} /> */}

                {userId ?
                    <img onClick={() => setIsToggled(true)} src={NotificationsIcon} style={{ cursor: 'pointer' }} />
                    // </span>
                    :
                    <Button className="login-btn-user" onClick={() => { setIsUser(true); history.push('/auth-user') }}>Login</Button>
                }
                <img src={profileIcon} onClick={viewProfile} style={{ width: "30px", height: "30px" }} />
            </div>
        </div>
    )
}

export default Header
