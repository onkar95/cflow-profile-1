import { makeStyles } from "@material-ui/core/styles"
import React, { useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import BricksImage from "../../../../../Images/Construction material/white/bricks.svg"
import CementImage from "../../../../../Images/Construction material/white/cement.svg"
import MarbleImage from "../../../../../Images/Construction material/white/Marbles.svg"
import PaintImage from "../../../../../Images/Construction material/white/paint.svg"
import PipesImage from "../../../../../Images/Construction material/white/pipes.svg"
import RMCImage from "../../../../../Images/Construction material/white/Rmc.svg"
import SandImage from "../../../../../Images/Construction material/white/sand.svg"
import StoneImage from "../../../../../Images/Construction material/white/stone.svg"
import TMTImage from "../../../../../Images/Construction material/white/tmt.svg"
import Card from "../Card/Card"
import BrickInput from "./CardInput/Bricks"
import CementInput from "./CardInput/Cement"
import MarbleInput from "./CardInput/Marble"
import PaintInput from "./CardInput/Paint"
import PipesInput from "./CardInput/Pipes"
import RMCInput from "./CardInput/RMC"
import SandInput from "./CardInput/Sand"
import StoneInput from "./CardInput/Stones"
import TMTInput from "./CardInput/TMT"
import "./ConstructionMaterial.css"

function ContructionMaterial({ formData, notify, newService, setNewService, AddService, handleClickOpen, servicesInfo, dropdownData }) {

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
        1: { name: "Bricks & Blocks", img: BricksImage },
        2: { name: "Cement", img: CementImage },
        3: { name: "RMC Mixture", img: RMCImage },
        4: { name: "Stones", img: StoneImage },
        5: { name: "Marble & Tile", img: MarbleImage },
        6: { name: "TMT Bars", img: TMTImage },
        7: { name: "Pipes", img: PipesImage },
        8: { name: "Paint & Putty", img: PaintImage },
    }

    const [arr, setArr] = useState(initialarr)
    const [currentCard, setCurrentCard] = useState({ name: "Sand", img: SandImage })
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
        <div className="construction-material-container-vendor">
            <div className="construction-material-top-vendor">
                <div className="construction-material-currentcard-vendor">
                    <Card img={currentCard.img} name={currentCard.name} />
                </div>
                <div className="construction-material-cardinput-vendor">
                    {currentCard.name === "Sand" && <SandInput formData={formData} notify={notify} servicesInfo={servicesInfo} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}
                    {currentCard.name === "Bricks & Blocks" && <BrickInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} />}
                    {currentCard.name === "Cement" && <CementInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "RMC Mixture" && <RMCInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "Stones" && <StoneInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "Marble & Tile" && <MarbleInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "TMT Bars" && <TMTInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "Pipes" && <PipesInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                    {currentCard.name === "Paint & Putty" && <PaintInput formData={formData} notify={notify} setModalOpen={setModalOpen} newService={newService} setNewService={setNewService} AddService={AddService} handleClickOpen={handleClickOpen} dropdownData={dropdownData} />}
                </div>
            </div>
            <div className="construction-material-bottom-vendor">
                <div className="construction-material-bottom-row-main-vendor">
                    <div className="construction-material-bottom-row1-vendor">
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(1); setTrigger(!trigger) }} >
                            <Card img={arr[1]["img"]} name={arr[1]["name"]}
                            />
                        </div>
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(2); setTrigger(!trigger) }} >
                            <Card img={arr[2]["img"]} name={arr[2]["name"]} />
                        </div>
                    </div>
                    <div className="construction-material-bottom-row1-vendor">
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(3); setTrigger(!trigger) }}>
                            <Card img={arr[3]["img"]} name={arr[3]["name"]} />
                        </div>
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(4); setTrigger(!trigger) }}>
                            <Card img={arr[4]["img"]} name={arr[4]["name"]} />
                        </div>
                    </div>
                </div>
                <div className="construction-material-bottom-row-main-vendor">
                    <div className="construction-material-bottom-row1-vendor">
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(5); setTrigger(!trigger) }}>
                            <Card img={arr[5]["img"]} name={arr[5]["name"]} />
                        </div>
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(6); setTrigger(!trigger) }}>
                            <Card img={arr[6]["img"]} name={arr[6]["name"]} />
                        </div>
                    </div>
                    <div className="construction-material-bottom-row1-vendor">
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(7); setTrigger(!trigger) }} >
                            <Card img={arr[7]["img"]} name={arr[7]["name"]} />
                        </div>
                        <div className="construction-material-card-vendor" onClick={() => { setClickedCard(8); setTrigger(!trigger) }}>
                            <Card img={arr[8]["img"]} name={arr[8]["name"]} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContructionMaterial
