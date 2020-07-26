import React from "react";
import { connect } from "react-redux";

const GetQRCodes = ({ codes }) => {
  return (
    <>
      <h1>QRCODES</h1>
      {codes
        ? codes.map((code) => {
            return (
              <div key={code.link} style={{ border: "solid black 1.5px" }}>
                <h4>{code.link}</h4>
                <p>{code.qr_code}</p>
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
