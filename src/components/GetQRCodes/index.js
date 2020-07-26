import React from "react";
import { connect } from "react-redux";

const GetQRCodes = ({ codes }) => {
  const createImg = (src) => {
    let x = document.createElement("IMG");
    x.setAttribute("src", src);
    x.setAttribute("width", "50");
    x.setAttribute("height", "50");
    x.setAttribute("alt", "");
    document.body.appendChild(x); //Insantly refresh
  };

  return (
    <>
      <h1>Current QR Codes</h1>
      {codes
        ? codes.map((code) => {
            return (
              <div key={code.link} style={{ border: "solid black 1.5px" }}>
                <div id="qr-container">
                  <div id="link"> {code.link} </div>
                  <div id="img"> {createImg(code.qr_code)} </div>
                </div>
              </div>
            );
          })
        : "no QR Codes yet!"}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    codes: state,
  };
};

export default connect(mapStateToProps)(GetQRCodes);
