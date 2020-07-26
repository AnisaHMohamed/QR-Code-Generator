import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { addQRCode, getQRCodes } from "../actions";

const AddQRCode = ({ addQRCode, getQRCodes }) => {
  const [code, setCode] = useState({ qr_code: "", link: "" });

  return (
    <>
      <h3>Link</h3>
      <input onChange={(e) => setDetail({ ...detail, link: e.target.value })} />
      <h3>Genre</h3>
      <input onChange={(e) => setCode({ ...code, link: e.target.value })} />
      <br />
      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          addQRCode(code);
          getQRCodes();
        }}
      >
        Create a new QR code!
      </button>
    </>
  );
};

const mapDispatchToProps = { addQRCode, getQRCodes };

export default connect(null, mapDispatchToProps)(AddQRCode);
