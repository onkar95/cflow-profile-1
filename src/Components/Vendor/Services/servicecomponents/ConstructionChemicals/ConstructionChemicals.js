import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import AdmixtureImage from "../../../../../Images/Construction Chemicals/admixture.svg";
import ConcreteImage from "../../../../../Images/Construction Chemicals/concrete.svg";
import FlooringImage from "../../../../../Images/Construction Chemicals/flooring.svg";
import GroutImage from "../../../../../Images/Construction Chemicals/grout.svg";
import SealantImage from "../../../../../Images/Construction Chemicals/sealant.svg";
import SurfaceImage from "../../../../../Images/Construction Chemicals/surface.svg";
import TilingImage from "../../../../../Images/Construction Chemicals/tiling.svg";
import WaterproofImage from "../../../../../Images/Construction Chemicals/waterproof1.svg";
import Card from "../Card/Card";
import Admixture from "./CardInput/Admixture";
import ConcreteRepair from './CardInput/ConcreteRepair';
import Flooring from './CardInput/Flooring';
import Grout from './CardInput/Grout';
import Sealant from './CardInput/Sealant';
import Surface from './CardInput/Surface';
import Tiling from './CardInput/Tiling';
import Waterproofing from './CardInput/waterproofing';
import "./ConstructionChemicals.css";


function ContructionChemicals({ formData, notify, newService, setNewService, AddService, handleClickOpen, chemicalDropDown }) {

    const [modalopen, setModalOpen] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const brands = ["site 1", "site2", "site 3", "site 4", "site 5"]
    const [brandcheck, setBrandCheck] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    })
    const [urgent, setUrgent] = useState(true)
    const [flexible, setFlexible] = useState(true)
    const onClickUrgent = () => {
        setFlexible(false)
    }
    const onClickFlexible = () => {
        setUrgent(false)
    }
    const handleCloseIcon = () => {
        setModalOpen(false)
        setUrgent(true)
        setFlexible(true)
    }
    const [startDate, setStartDate] = useState(new Date());

    const useStyles = makeStyles({
        dialogPaper: {
            minHeight: '60vh',
            maxHeight: '60vh',
            minWidth: "25%",
            maxWidth: "50%",
            backgroundColor: "#121417",
            padding: "1rem 1.25rem"
        },
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",

            }
        },
        input: {
            color: "white",

        },
        overflow: "hidden"
    })
    const [quantity, setQuantity] = useState()
    const classes = useStyles();

    // 0 => Sand
    // 1 => Brick
    // 2 => Cement
    // 3 => RMC
    // 4 => Stones
    // 5 => Marble
    // 6 => TMT
    // 7 => Pipes
    // 8 => Paint

    let initialarr = {
        //    0 : {name:"Sand" , img:SandImage},

        1: { name: "Waterproofing", img: WaterproofImage },
        2: { name: "Surface treatments", img: SurfaceImage },
        3: { name: "Grout & Anchor", img: GroutImage },
        4: { name: "Concrete Repair", img: ConcreteImage },
        5: { name: "Sealant", img: SealantImage },
        6: { name: "Flooring", img: FlooringImage },
        7: { name: "Tiling", img: TilingImage },
    };

    const [arr, setArr] = useState(initialarr)
    const [currentCard, setCurrentCard] = useState({ name: "Concrete Admixture", img: AdmixtureImage })
    const [clickedCard, setClickedCard] = useState(0)
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
        if (clickedCard !== 0) {
            const currentCardData = arr[currentCard]
            const temp = currentCard
            setCurrentCard(arr[clickedCard])
            setArr({ ...arr, [clickedCard]: temp })
        }
    }, [trigger])




    return (
        <div className="construction-chemical-container-vendor">
            <div className="construction-chemical-top-vendor">
                <div className="construction-chemical-currentcard-vendor">
                    <Card img={currentCard.img} name={currentCard.name} />
                </div>
                <div className="construction-chemical-cardinput-vendor">
                    {currentCard.name === "Concrete Admixture" && <Admixture formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Waterproofing" && <Waterproofing formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Grout & Anchor" && <Grout formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Concrete Repair" && <ConcreteRepair formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Sealant" && <Sealant formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Flooring" && <Flooring formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Tiling" && <Tiling formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}
                    {currentCard.name === "Surface treatments" && <Surface formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} chemicalDropDown={chemicalDropDown} />}

                </div>
            </div>
            <div className="construction-chemical-bottom-vendor">
                <div className="construction-chemical-bottom-row-main-vendor">
                    <div className="construction-chemical-bottom-row1-vendor">
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(1); setTrigger(!trigger) }} >
                            <Card img={arr[1]["img"]} name={arr[1]["name"]}
                            />
                        </div>
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(2); setTrigger(!trigger) }} >
                            <Card img={arr[2]["img"]} name={arr[2]["name"]} />
                        </div>
                    </div>
                    <div className="construction-chemical-bottom-row1-vendor">
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(3); setTrigger(!trigger) }}>
                            <Card img={arr[3]["img"]} name={arr[3]["name"]} />
                        </div>
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(4); setTrigger(!trigger) }}>
                            <Card img={arr[4]["img"]} name={arr[4]["name"]} />
                        </div>
                    </div>
                </div>
                <div className="construction-chemical-bottom-row-main-vendor">
                    <div className="construction-chemical-bottom-row1-vendor">
                        <div className="construction-chemical-card" onClick={() => { setClickedCard(5); setTrigger(!trigger) }}>
                            <Card img={arr[5]["img"]} name={arr[5]["name"]} />
                        </div>
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(6); setTrigger(!trigger) }}>
                            <Card img={arr[6]["img"]} name={arr[6]["name"]} />
                        </div>
                    </div>
                    <div className="construction-chemical-bottom-row1-vendor">
                        <div className="construction-chemical-card-vendor" onClick={() => { setClickedCard(7); setTrigger(!trigger) }}>
                            <Card img={arr[7]["img"]} name={arr[7]["name"]} />
                        </div>


                    </div>
                </div>
            </div>



        </div>
    )
}

export default ContructionChemicals
