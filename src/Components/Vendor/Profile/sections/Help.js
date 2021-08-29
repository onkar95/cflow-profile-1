import React, { useRef } from "react";
import {
    Column,
    Button,
    Textarea,
} from "../../Styled/Styled";
import { GrAttachment } from "react-icons/gr";
const Help = () => {
    const inputFile = useRef(null);

    const onFileClick = () => {
        inputFile.current.click();
    };
    return (
        <Column>
            <h3
                style={{
                    alignSelf: "center",
                    color: "white",
                    position: "relative",
                    display: "inline",
                    margin: "0.5rem 1rem",
                    marginBottom: "1.3rem",
                    marginTop: "3rem",
                    borderRadius:'5px',
                }}
            >
                How Can We Help You?
            </h3>
            <Textarea
                style={{
                    resize: "none",
                    minHeight: "10rem",
                }}
                placeholder='| Tell Us More About Your Problem'
            ></Textarea>
            <Button
                onClick={onFileClick}
                style={{
                    position: "relative",
                    display: "inline",
                    top: "-4rem",
                    left: "30%",
                    margin: "auto",
                }}
            >
                <GrAttachment style={{ margin: "0 .2rem" }} />
                Attach
            </Button>
            <input
                id='file-attach-help'
                type='file'
                ref={inputFile}
                style={{
                    display: "none",
                }}
            />
            <Button
                style={{
                    alignSelf: "center",
                }}
            >
                Send
            </Button>
        </Column>
    );
};

export default Help;
