/* eslint-disable no-else-return */
import {
  ADD_LIST_MOQ,
  CHANGE_VALUE,
  SAVE_SELECT_CASE,
  ADD_MOQ,
  UPDATED_MOQ,
  DELETE_MOQ,
} from 'actions/moq';

const initialState = {
  moqList: [],
  id: null,
  reference: '',
  moq: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIST_MOQ:
      return {
        ...state,
        moqList: action.listMoq,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue
      };
    case SAVE_SELECT_CASE:
      return {
        ...state,
        id: action.id,
        reference: action.reference,
        moq: action.moq,
      };
    case ADD_MOQ:
      return {
        ...state,
        moqList: [
          ...state.moqList,
          {
            id: action.id,
            id_ref: action.reference,
            moq: action.moq
          },
        ],
      };
    case UPDATED_MOQ:
      return {
        ...state,
        moqList: state.moqList.map(moq => {
          if (moq.id == action.id) {
            return {
              id: action.id,
              id_ref: action.reference,
              moq: action.moq
            };
          } else {
            return moq;
          }
        }),
      };
    case DELETE_MOQ:
      return {
        ...state,
        moqList: state.moqList.filter((moq) => { return action.id != moq.id}),
      }
    default:
      return state;
  }
};

export default reducer;
