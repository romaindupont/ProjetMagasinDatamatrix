import {
  ADD_FLASH_REFERENCE,
  DELETE_FLASH_LIST,
  REMOVE_FLASH_LIST,
  SELECT_FLASH_LIST,
  ADD_COUNTER_PALET,
} from 'actions/flash';

const initialState = {
  flashList: [],
  idFlash: null,
  paletCounter: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FLASH_REFERENCE:
      return {
        ...state,
        flashList: [
          ...state.flashList,
          {
            reference: action.reference,
            idFlash: action.idFlash,
          },
        ],
      };
    case DELETE_FLASH_LIST:
      return {
        ...state,
        flashList: [],
      };
    case REMOVE_FLASH_LIST:
      return {
        ...state,
        flashList: state.flashList.filter((flash) => { return action.idFlash !== flash.idFlash; }),
      };
    case SELECT_FLASH_LIST:
      return {
        ...state,
        idFlash: action.idFlash,
      };
    case ADD_COUNTER_PALET:
      return {
        ...state,
        paletCounter: state.paletCounter + 1,
      };
    default:
      return state;
  }
};

export default reducer;
