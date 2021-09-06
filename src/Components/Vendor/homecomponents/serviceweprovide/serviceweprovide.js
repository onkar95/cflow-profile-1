import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import AgentIcon from "../../../../Images/Agents.png";
import ChemicalIcon from "../../../../Images/Chemicals.png";
import MachinesIcon from "../../../../Images/Machines.png";
import MaterialIcon from "../../../../Images/Materials.png";
import VehicleIcon from "../../../../Images/Vehicles.png";
import Card1 from "./card/card";
import './serviceweprovide.css';





const Serviceweprovide = ({ currentSectionService, setCurrentSectionService, setCurrentSection }) => {

    const img_arr = [AgentIcon, MaterialIcon, VehicleIcon, MachinesIcon, ChemicalIcon]
    const img_arr1 = ['Agents', 'Construction Material', 'Construction Vehicle', 'Construction Machine', 'Construction Chemical']
    const [winsize, setwinsize] = useState(window.screen.width);
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setwinsize(window.innerWidth)
        }
        else {
            setwinsize(window.innerWidth)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [window.screen.width])
    const useStyles = makeStyles({
        outlined: {
            color: 'white',
            borderColor: 'white',
            marginTop: 20,
            padding: "10px 0px",
            width: winsize > 1000 ? '45%' : "70%",
        },
    });

    const classes = useStyles();

    return (
        <div style={{ width: "100%" }}>
            <Grid container direction="row" justify="center" alignItems="center" className="d1">
                <Grid items xs={3} >
                    <Card1 title="Agents" icon={<img src={AgentIcon} />} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} />
                </Grid>
                <Grid items xs={3}>
                    <Card1 title="Construction Material" icon={<img src={MaterialIcon} />} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} />
                </Grid>
                <Grid items xs={3}>
                    <Card1 title="Construction Vehicle" icon={<img src={VehicleIcon} />} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} />
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className="d1">
                {/* <Grid items xs={3}>
                    <Card1  title="Construction Machine" icon={<img src={MachinesIcon}/>} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection}/>
                </Grid> */}
                <Grid items xs={3}>
                    <Card1 title="Construction Chemical" icon={<img src={ChemicalIcon} />} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} />
                </Grid>
            </Grid>
            <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true} showStatus={false} className="d2">
                {
                    img_arr.map((img, index) => (
                        <div style={{ height: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }} key={index}>
                            <Card1 icon={<img src={img} />} currentSectionService={currentSectionService} setCurrentSectionService={setCurrentSectionService} setCurrentSection={setCurrentSection} title={img_arr1[index]} />
                        </div>
                    ))
                }
            </Carousel>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid items xs={8} md={4} lg={3} style={{ justifyContent: "center", display: "flex", alignItems: "center", margin: '1rem 0rem 2rem 0rem' }}>
                    <Button variant='outlined' className={classes.outlined} color="text" onClick={() => { setCurrentSection(1); setCurrentSectionService(0); window.scrollTo(0, 100) }}> Explore All<ArrowRightAltIcon style={{ padding: "3" }} /> </Button>
                </Grid>
            </Grid>
            <br />

        </div>
    )
}

export default Serviceweprovide;
