import React, { useEffect, useState } from 'react'
import BackHoeLoaderImage from "../../../../../Images/Construction vehicles/white/BackhoeLoader.svg"
import CompacterImage from "../../../../../Images/Construction vehicles/white/Compactor.svg"
import CraneImage from "../../../../../Images/Construction vehicles/white/Crane.svg"
import CrawlerCraneImage from "../../../../../Images/Construction vehicles/white/crawlercrane.svg"
import DumperImage from "../../../../../Images/Construction vehicles/white/dumper.svg"
import ExcavatorImage from "../../../../../Images/Construction vehicles/white/excavator.svg"
import ForkLiftImage from "../../../../../Images/Construction vehicles/white/ForkLifter.svg"
import MotorGradeImage from "../../../../../Images/Construction vehicles/white/MotorGrader.svg"
import RollerImage from "../../../../../Images/Construction vehicles/white/road-roller.svg"
import TankerImage from "../../../../../Images/Construction vehicles/white/Tanker.svg"
import TipperImage from "../../../../../Images/Construction vehicles/white/tipper.svg"
import TractorImage from "../../../../../Images/Construction vehicles/white/Tractor.svg"
import TransitMixerImage from "../../../../../Images/Construction vehicles/white/transitmixer.svg"
import TruckImage from "../../../../../Images/Construction vehicles/white/Truck.svg"
import TyreMountedImage from "../../../../../Images/Construction vehicles/white/TyreMountedCrane.svg"
import Card from '../Card/Card'
import "./CommercialVehicles.css"

function CommercialVehicles({ setCurrentSection, setSelected, site }) {


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


    return (
        <>
            {winsize > 500 ?
                <div className="commerical-vehicle-container">
                    <div className="commercial-vehicle-row">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Dumper", img: DumperImage }) }}>
                            <Card img={DumperImage} name="Dumper" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Transit Mixer", img: TransitMixerImage }) }}>
                            <Card img={TransitMixerImage} name="Transit Mixer" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Crane", img: CraneImage }) }}>
                            <Card img={CraneImage} name="Crane" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Crawler Crane", img: CrawlerCraneImage }) }}>
                            <Card img={CrawlerCraneImage} name="Crawler Crane" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Mounted Crane", img: TyreMountedImage }) }}>
                            <Card img={TyreMountedImage} name="Mounted Crane" />
                        </div>

                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tipper", img: TipperImage }) }}>
                            <Card img={TipperImage} name="Tipper" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Compactor", img: CompacterImage }) }}>
                            <Card img={CompacterImage} name="Compactor" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Excavator", img: ExcavatorImage }) }}>
                            <Card img={ExcavatorImage} name="Excavator" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Backhoe Loader", img: BackHoeLoaderImage }) }}>
                            <Card img={BackHoeLoaderImage} name="Backhoe Loader" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Roller", img: RollerImage }) }}>
                            <Card img={RollerImage} name="Roller" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tanker", img: TankerImage }) }}>
                            <Card img={TankerImage} name="Tanker" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Fork Lift", img: ForkLiftImage }) }}>
                            <Card img={ForkLiftImage} name="Fork Lift" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Motor Grader", img: MotorGradeImage }) }}>
                            <Card img={MotorGradeImage} name="Motor Grader" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tractor", img: TractorImage }) }}>
                            <Card img={TractorImage} name="Tractor" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Truck", img: TruckImage }) }}>
                            <Card img={TruckImage} name="Truck" />
                        </div>
                    </div>
                </div>
                :
                <div className="commerical-vehicle-container">
                    <div className="commercial-vehicle-row">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Dumper", img: DumperImage }) }}>
                            <Card img={DumperImage} name="Dumper" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Transit Mixer", img: TransitMixerImage }) }}>
                            <Card img={TransitMixerImage} name="Transit Mixer" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Crane", img: CraneImage }) }}>
                            <Card img={CraneImage} name="Crane" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Crawler Crane", img: CrawlerCraneImage }) }}>
                            <Card img={CrawlerCraneImage} name="Crawler Crane" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Mounted Crane", img: TyreMountedImage }) }}>
                            <Card img={TyreMountedImage} name="Mounted Crane" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tipper", img: TipperImage }) }}>
                            <Card img={TipperImage} name="Tipper" />
                        </div>
                    </div>



                    <div className="commercial-vehicle-row2">

                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Compactor", img: CompacterImage }) }}>
                            <Card img={CompacterImage} name="Compactor" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Excavator", img: ExcavatorImage }) }}>
                            <Card img={ExcavatorImage} name="Excavator" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Backhoe Loader", img: BackHoeLoaderImage }) }}>
                            <Card img={BackHoeLoaderImage} name="Backhoe Loader" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Roller", img: RollerImage }) }}>
                            <Card img={RollerImage} name="Roller" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tanker", img: TankerImage }) }}>
                            <Card img={TankerImage} name="Tanker" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Fork Lift", img: ForkLiftImage }) }}>
                            <Card img={ForkLiftImage} name="Fork Lift" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Motor Grader", img: MotorGradeImage }) }}>
                            <Card img={MotorGradeImage} name="Motor Grader" />
                        </div>
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Tractor", img: TractorImage }) }}>
                            <Card img={TractorImage} name="Tractor" />
                        </div>
                    </div>
                    <div className="commercial-vehicle-row2">
                        <div className="commercial-vehicle-card" onClick={() => { setCurrentSection(5); setSelected({ name: "Truck", img: TruckImage }) }}>
                            <Card img={TruckImage} name="Truck" />
                        </div>
                    </div>
                </div>
            }
        </>


    )
}

export default CommercialVehicles
