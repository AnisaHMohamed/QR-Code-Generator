export default (state = [], action) => {
  switch (action.type) {
    case "GET_QRCODES":
      return state;
    case "ADD_QRCODE":
      return [...state, action.payload];
    default:
      return state;
  }
};
