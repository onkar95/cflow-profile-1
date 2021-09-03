import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"
import DeleteIcon from "../../../../Images/newProfileYellow/Delete.png"
import AddIcon from "../../../../Images/newProfileYellow/add new address.png"

const AddressBook = ({ theme, setCurrentSection, siteNo, site, setSite, getSite, handleClickOpen, setSiteNo }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)

    const handleEdit = (index) => {
        setCurrentSection(8)
        setSiteNo(index)
    }
    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    let temp;


    const handleDelete = async (e) => {
        e.preventDefault();
        alert("are you want to delete the address")

        let arr = site.filter((item, index) => index !== siteNo)
        setSite(arr)
        await axios.post(`${process.env.REACT_APP_URL}/user/update_site/${userId}`, arr)
            .then(response => {
                getSite();
                notify("address deleted sucessfully")
            })


        setCurrentSection(7)

    }
    console.log(site, 'site');
    return (
        <div className="addressBook" >
            <Row className="profile_section_heading">
                <Column className="inputs_coloum_group"> Site Address Book</Column>
            </Row>
            <hr style={{ width: "100%" }} />

            <div className="saved_address">
                {
                    site?.map((value, index) => (
                        <div className="address" style={theme === true ? { backgroundColor: "#e0ded8 " } : null}>
                            <div className="address_details">
                                <h1>
                                    Site Address {index + 1}
                                </h1>
                                <h5>
                                    {value?.building_name},{value?.city}
                                </h5>
                            </div>
                            <div className="address_btn">
                                <div className="del-edit-add-btn edit_icon" onClick={() => handleEdit(index)} >
                                    <img src={EditIcon} alt="" />
                                </div>
                                <div className="del-edit-add-btn delete_icon" onClick={handleDelete} >
                                    <img src={DeleteIcon} alt="" />
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>


            <ToastContainer />
            <div className="addNewAddress_btn" style={theme === true ? { backgroundColor: "#c5c3c3" } : null}>
                <div>
                    add new site Address
                </div>
                <button
                    onClick={() => setCurrentSection(9)}
                // className="disabled_save_butn"
                >
                    <img src={AddIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                    New Address
                </button>
            </div>
        </div >
    );
};

export default AddressBook;
