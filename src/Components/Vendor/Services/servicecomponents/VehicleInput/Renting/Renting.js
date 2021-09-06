import React , {useEffect, useState} from 'react'
import "./Renting.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
function Renting({formData, notify,setCurrentSection,renting_details,setRenting_details,AddService,handleClickOpen,basic_information,paper_work,newService,setNewService}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()

    const [driver,setDriver] = useState(false)
    const [nodriver,setNoDriver] = useState(false)
    // useEffect(() => {
    //     console.log("here")
    //     let final_arr=[]
    //     let temp_info = {basic_information:basic_information , paper_work:paper_work , renting_details:renting_details}
    //     final_arr.push(temp_info)
    //     console.log(final_arr,"final_arr")
    //     setNewService({...newService ,info:final_arr})
    // },[basic_information,paper_work,renting_details])

        const handleSubmit = () => {
                             if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if(!driver && !nodriver)
            {
                notify('Request cannot be empty!')
            }
            else if(!formData?.phone_no || !formData?.first_name){
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else
            {
                if(driver)
                {
                    setRenting_details({...renting_details , "with_driver":true})
                }
                else
                {
                    setRenting_details({...renting_details , "with_driver":false})
                }
                setRenting_details({...renting_details , "start_date":startDate, "end_date":endDate})
        //     let final_arr=[]
        // let temp_info = {basic_information:basic_information , paper_work:paper_work , renting_details:renting_details}
        // final_arr.push(temp_info)
        // console.log(final_arr,"final_arr")
        // setNewService({...newService ,info:final_arr})
            AddService();
            setCurrentSection(2)
            handleClickOpen();
            }
            
        }
    }

    return (
        <div className="renting-container">
            <div className="renting-container-row1">
                <div  className="renting-container-col"> 
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={driver}
                                onChange={(e) => nodriver === false && setDriver(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                            />
                            }
                    label="With Driver"
                    style={{
                        backgroundColor:"transparent",
                        fontWeight:"100"
                    }}
                />
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="services-form-date"/>
                </div>
                <div  className="renting-container-col"> 
                <FormControlLabel
                    control={
                            <Checkbox
                                checked={nodriver}
                                onChange={(e) => driver === false && setNoDriver(e.target.checked)}
                                color="primary"
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                                checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1.5px solid #2d2d2d"}}/>}
                            />
                            }
                    label="Without Driver"
                    style={{
                        backgroundColor:"transparent",
                        fontWeight:"100"
                    }}
                />
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="services-form-date"/>
                </div>
            </div>
            <div>

            </div>
            <div className="paper-button-container">
                    <Button className="paper-button" onClick={handleSubmit}>Save</Button>
                </div>
        </div>
    )
}

export default Renting
