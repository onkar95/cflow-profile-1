import React ,{useState,useEffect} from 'react'
import "./Styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom"
function Bricks({notify,setModalOpen,newService,setNewService,AddService,handleClickOpen}) {
        const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [clay, setClay] = useState(false)
    const [cement, setCement] = useState(false)
    const [fly,setFly] = useState(false)

    const handleadd=()=>{
                        if(userId === undefined)
        {
            // alert('Please Login'); 
            history.push('/auth-user')
        }
        else
        {
        if(!clay && !cement && !fly){
            notify('Request cannot be empty!')
        }
        else{
            AddService();
            handleClickOpen();  
        }
    }
    }

    useEffect(() => {
        let arr = []
        let info_arr = []
        if(clay)
        {
            // arr.push("clay")
            info_arr.push({type:"clay"})
        }
        if(cement)
        {
            // arr.push("cement")
            info_arr.push({type:"cement"})
        }
        if(fly)
        {
            // arr.push("fly ash")
            info_arr.push({type:"fly ash"})
        }
        // let info_arr={type:arr}
        setNewService({...newService , info:info_arr , type:"Bricks & Blocks"})
    },[clay,cement,fly])
    return (
        <div style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
                <div className="sand-form">
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={clay}
                                onChange={(e) => setClay(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Clay Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={cement}
                                onChange={(e) => setCement(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" className="sand-input-checkbox" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Cement Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={fly}
                                onChange={(e) => setFly(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon className="sand-input-checkbox" fontSize="small" style={{border:"1px solid white"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}
                            />
                            }
                    label="Fly Ash Bricks"
                    className="sand-form-input-vendor"
                    style={{
                        backgroundColor:"#08090C",
                        // width: "15rem",
                        padding: "3%",
                        borderRadius:"10px",
                        boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)"
                    }}
                />
                </div>
                <div className="sand-bottom-buttons" style={{width: "20%",height: "45%"}}>
                <Button variant="contained" className="sand-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleadd}>
                    Add
                </Button>
                </div>
        </div>
    )
}

export default Bricks
