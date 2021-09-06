import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Button, Column, Row, SectionTitle, Star, Textarea
} from "../../Styled/Styled";

require('dotenv').config()

const Feedback = ({ formData, setFormData, getUser, handleClickOpen }) => {
    const [stars, setStars] = useState(0);
    const [rate, setRate] = useState(0);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [feed, setFeed] = useState("");



    const handleFeedback = async (e) => {
        e.preventDefault();
        if (rate === 1) {

            const temp = { feed: feed, rate: rate }
            await axios.post(`${process.env.REACT_APP_URL}/user/feedback/${userId}`, temp)
                .then(response => {
                    getUser()
                })
            setFeed("")
            setRate(0)
            setStars(0)
            handleClickOpen();
        } else {
            notify("select the rating first");
            // alert("select the rating first")
        }
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

    return (
        <Column>
            <SectionTitle
                style={{
                    alignSelf: "center",
                    marginTop: "1rem",
                }}
            >
                Rate Us
            </SectionTitle>
            <Textarea
                style={{
                    resize: "none",
                    minHeight: "10rem",
                }}
                placeholder='| Give Your Feedback Here'
                onChange={(e) => setFeed(e.target.value)}
            ></Textarea>
            <Row
                style={{
                    alignSelf: "center",
                    marginBottom: "3rem",
                    marginTop: "1rem",
                }}
            >
                <Star
                    onMouseOver={() => setStars(1)}
                    onMouseLeave={() => setStars(0)}
                    onClick={() => setRate(1)}
                    style={
                        rate >= 1 || stars >= 1
                            ? {
                                backgroundColor: "#FFB600",
                            }
                            : {}
                    }
                />
                <Star
                    onMouseOver={() => setStars(2)}
                    onMouseLeave={() => setStars(0)}
                    onClick={() => setRate(2)}
                    style={
                        rate >= 2 || stars >= 2
                            ? {
                                backgroundColor: "#FFB600",
                            }
                            : {}
                    }
                />
                <Star
                    onMouseOver={() => setStars(3)}
                    onMouseLeave={() => setStars(0)}
                    onClick={() => setRate(3)}
                    style={
                        rate >= 3 || stars >= 3
                            ? {
                                backgroundColor: "#FFB600",
                            }
                            : {}
                    }
                />
                <Star
                    onMouseOver={() => setStars(4)}
                    onMouseLeave={() => setStars(0)}
                    onClick={() => setRate(4)}
                    style={
                        rate >= 4 || stars >= 4
                            ? {
                                backgroundColor: "#FFB600",
                            }
                            : {}
                    }
                />
                <Star
                    onMouseOver={() => setStars(5)}
                    onMouseLeave={() => setStars(0)}
                    onClick={() => setRate(5)}
                    style={
                        rate >= 5 || stars >= 5
                            ? {
                                backgroundColor: "#FFB600",
                            }
                            : {}
                    }
                />
            </Row>
            <Button
                style={{
                    alignSelf: "center",
                }}
                onClick={handleFeedback}
            >
                Submit
            </Button>
            <ToastContainer />
        </Column>
    );
};

export default Feedback;
