import React, { useRef } from "react";
import { Column, Button, Textarea } from "../../Styled/Styled";
import { GrAttachment } from "react-icons/gr";
import Submit from "../../../../Images/newProfileYellow/Send Message.png"

const Help = ({ theme }) => {
  const inputFile = useRef(null);

  const onFileClick = () => {
    inputFile.current.click();
  };
  return (
    <>
      <div>
        <p>Help Center</p>
      </div>
      {<hr style={{ width: "100%" }} />}
      <div className="help">

        <div className="help_ques_div">
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, porro?</p>
            <ans>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa suscipit mollitia eius id. Corporis laborum temporibus eveniet vero fugit alias!</ans>
          </div>

          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, porro?</p>
            <ans>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa suscipit mollitia eius id. Corporis laborum temporibus eveniet vero fugit alias!</ans>
          </div>

          <div>
            <p>stil have question? <a href="">contact us</a></p>
          </div>

        </div>
        {window.innerWidth < 600 ? <hr style={{ width: "100%" }} /> : null}
        <div className="help_text_div">
          <Column>

            <h3
              style={theme === true ? {
                alignSelf: "center",
                color: "black",
                position: "relative",
                display: "inline",
                margin: "0.5rem 1rem",
                marginBottom: "1.3rem",
                // marginTop: "3rem",
              } : {
                alignSelf: "center",
                color: "white",
                position: "relative",
                display: "inline",
                margin: "0.5rem 1rem",
                marginBottom: "1.3rem",
              }}
              >
              Message
            </h3>
            <Textarea
              style={theme === true ? {
                backgroundColor: "#c5c3c3", resize: "none",
                minHeight: "10rem",
                minWidth: "70%",
              } : {
                resize: "none",
                minHeight: "10rem",
                minWidth: "70%",
                backgroundColor: "#2d2d2d",
              }}
              placeholder="Tell Us More About Your Problem"
            ></Textarea>

            <input
              id="file-attach-help"
              type="file"
              ref={inputFile}
              style={{
                display: "none",
              }}
            />
            <div className="help_btns">
              <div
                style={{ margin: "3px" }}
                onClick={onFileClick}
                className="disabled_save_butn  "
              >
                <GrAttachment />
                Attach
              </div>
              <div
                style={{ margin: "3px" }}
                className="disabled_save_butn  "
              >
                <img src={Submit} alt="" style={{ height: "20px", marginRight: "2px" }} />
                Submit
              </div>
            </div>

          </Column>
        </div>

      </div>

    </>
  );
};

export default Help;
