import React, { useState } from "react";
import { connect } from "react-redux";
import qrcode from "qrcode-generator";

import { addQRCode, getQRCodes } from "../../actions";

const AddQRCode = ({ addQRCode, getQRCodes }) => {
  const [code, setCode] = useState({ qr_code: "", link: "" });
  const gen = (link) => {
    let typeNumber = 4;
    let errorCorrectionLevel = "L";
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(link);
    qr.make();
    let generatedQRCode = qr.createImgTag();
    document.getElementById("placeHolder").innerHTML = generatedQRCode;
    let generatedCodeSrc = generatedQRCode.split(" ")[1].split('"')[1];
    console.log(generatedCodeSrc);
    setCode({ ...code, qr_code: generatedCodeSrc });
  };

  return (
    <>
      <script type="text/javascript" src="qrcode.js"></script>
      <div id="placeHolder"></div>
      <h3>Link</h3>
      <div id="placeHolder"></div>
      <input onChange={(e) => setCode({ ...code, link: e.target.value })} />

      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          gen(code.link);
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
