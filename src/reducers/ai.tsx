import { ADD_LIST_AI } from "actions/ai";

const initialState = {
  aiList: [],

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST_AI:
      return {
        ...state,
        aiList: action.listAi,
      };
    default:
      return state;
  }
};

export default reducer;
