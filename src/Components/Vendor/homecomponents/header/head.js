import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssessmentIcon from '@material-ui/icons/Assessment';
import "./head.css"
import Leads from "../../Leads/leads";
import Profile1 from "../../Profile/index";
import Notifications from "../../Notifications/Notifications"
import Homecontent from "../homecontent/homecontent";
import { Button,Grid } from "@material-ui/core";




function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Heads=(props)=> {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [activeind,setactive]=useState(0);
  const [isToggled,setIsToggled] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setactive(newValue);
  };


  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}

        TabIndicatorProps={{
            style: {
              backgroundColor: "#F9B308"
             }
            }}
      >
    
        <Tab  className={activeind===0?"activetab":"defaulttab"}  label={<div><HomeIcon style ={ {verticalAlign : 'middle',paddingRight:5}} /> Home</div>} />
        <Tab  className={activeind===1?"activetab":"defaulttab"}  label={<div><InsertEmoticonIcon style={{verticalAlign:"middle",paddingRight:5}}  />Service</div>}/>
        <Tab  className={activeind===2?"activetab":"defaulttab"}  label={<div><AssessmentIcon style={{verticalAlign:"middle",paddingRight:5}}  /> Leads </div>}/>
        <Tab  className={activeind===3?"activetab":"defaulttab"}  label={<div><AccountCircleIcon style={{verticalAlign:"middle",paddingRight:5}}   />Profile</div>} />
        <Button  onClick={() => setIsToggled(true)} className={activeind===4?"activetab":"defaulttab1"} >{<div><NotificationsIcon style={{verticalAlign:"middle",paddingRight:5}}   />Notification</div>}</Button>
      </Tabs>
      <Notifications isToggled={isToggled} setIsToggled={setIsToggled}/>
      <TabPanel  value={value}  index={0}>
          <Box display="block" onClick={() => isToggled && setIsToggled(false)}>
            <Homecontent />
          </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box onClick={() => isToggled && setIsToggled(false)}>
        <Leads/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Box onClick={() => isToggled && setIsToggled(false)}>
            <Profile1/>
          </Box> 
      </TabPanel>

    </div>
  );
}

export default Heads;

// function Heads() {
//   const sections = ["Home","Services","Leads","Profile"]
//   const sections_logo = [<HomeIcon/> , <InsertEmoticonIcon/> , <AssessmentIcon/> , <AccountCircleIcon/>  ]
//   const [currentSection,setCurrentSection] = useState(0)
//   const [isToggled,setIsToggled] = useState(false)



  
//   return (
//       <div className="home-user-container" >
//           <div className="home-user-sections">
//               <Grid container item xs={12}>
//                   {
//                   sections.map((section,index) => (
//                           <Grid item xs={2} className="home-user-section" style={currentSection === index ? {backgroundColor:"#ffb600"}:{backgroundColor:"#2D2D2D",color:'white'}} onClick={() => setCurrentSection(index)} key={index} >
//                               {sections_logo[index]}
//                               {section}
//                           </Grid>
//                   ))
//                   }
//                   <Grid item xs={2} className="home-user-section" style={{backgroundColor:"#2D2D2D",color:'white'}} onClick={() => setIsToggled(true)}>
//                               <NotificationsIcon/>
//                               Notification
//                   </Grid>
//               </Grid>                          
//           </div>
//           <div className="home-user-content" onClick={() => isToggled && setIsToggled(false)}>
//               {currentSection === 0 && <Homecontent/>}
//               {currentSection === 2 && <Leads/>}
//               {currentSection === 3 && <Profile1/>}


//           </div>
//           <Notifications isToggled={isToggled} setIsToggled={setIsToggled}/>
//       </div>
//   )
// } 


// export default Heads;