const initialState = {
  contact: [],

  keyword: "",
};
const contactReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contact.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
    default:
      return { ...state };
  }

  return { ...state };
};
export default contactReducer;
