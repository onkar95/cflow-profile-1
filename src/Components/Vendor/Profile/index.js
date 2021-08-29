import Profile from "./Profile";
import React from 'react';
import {Grid, Typography,Link, Box,Breadcrumbs } from "@material-ui/core"


const Profile1 = ({formData,setFormData , getUser , currentSection, setCurrentSection}) => {
    return (
        <>
        <div style={{marginBottom:"2rem",marginTop:"1rem"}}>
            <div className="container2">
                <Grid container>
                    <Grid items xs={12}>
                        <Breadcrumbs style={{marginTop:70,marginLeft:10,color:'white',fontSize:20,fontWeight:'700',marginBottom:50,marginTop:"-2rem"}}>
                                <Typography style={{color:'#fff',fontSize:20}}>Home</Typography>
                            <Typography style={{color:'#FFB600',fontSize:20}}>Profile</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid items xs={12}>
                        <Profile formData={formData} setFormData={setFormData} getUser={getUser} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
    )
}

export default Profile1

