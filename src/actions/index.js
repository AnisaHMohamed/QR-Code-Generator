// Action Creator
export const getQRCodes = () => {
  // Action
  return {
    type: "GET_QRCODES",
  };
};

export const addQRCode = (qr_code) => {
  return {
    type: "ADD_QRCODE",
    payload: qr_code,
  };
};
