import {
  SAVE_COMMANDE,
  REMOVE_ORDER,
  CHANGE_STYLE,
  DELIVERY_LIST,
  SAVE_ID_DELIVERY,
  ORDERS_LIST_SAVE,
  SELECT_LINE,
  CHANGE_VALUE_ORDER,
  UPDATE_LINE,
  ADD_ORDER_LINE,
} from 'actions/commande';

const initialState = {
  listCommande: [],
  cssStyle: '',
  listStyle: [
    {
      reference: '',
      style: '',
    },
  ],
  listDelivery: [],
  id: null,
  listOfOrders: [],
  selectList: [],
  reference: '',
  customRef: '',
  quantity: null,
  deliveryQuantity: null,
  dateNeed: '',
  numeroCde: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COMMANDE:
      return {
        ...state,
        listCommande: action.csv
      };
    case REMOVE_ORDER:
      return {
        ...state,
        listCommande: [],
      };
    case CHANGE_STYLE:
      return {
        ...state,
        listStyle: [
          ...state.listStyle,
          {
            reference: action.reference,
            style: action.css
          },
        ],
      };
    case DELIVERY_LIST:
      return {
        ...state,
        listDelivery: action.list,
      };
    case SAVE_ID_DELIVERY:
      return {
        ...state,
        id: action.id,
      };
    case ORDERS_LIST_SAVE:
      return {
        ...state,
        listOfOrders: action.list,
      };
    case SELECT_LINE:
      return {
        ...state,
        id: action.id,
        reference: action.reference,
        customRef: action.customRef,
        quantity: action.quantity,
        deliveryQuantity: action.deliveryQuantity,
        dateNeed: action.dateNeed,
        numeroCde: action.numeroCde,
      };
    case CHANGE_VALUE_ORDER:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case UPDATE_LINE:
      return {
        ...state,
        listOfOrders: state.listOfOrders.map((order) => {
          if (order.id === action.id) {
            return {
              id: order.id,
              reference: action.reference,
              customRef: action.customRef,
              quantity: action.quantity,
              deliveryQuantity: action.deliveryQuantity,
              dateNeed: action.dateNeed,
              numeroCde: action.numeroCde
            };
          }
          return order;
        }),
      };
    case ADD_ORDER_LINE:
      return {
        ...state,
        listOfOrders: [
          ...state.listOfOrders,
          {
            id: action.id,
            reference: action.reference,
            customRef: action.customRef,
            quantity: action.quantity,
            deliveryQuantity: action.deliveryQuantity,
            dateNeed: action.dateNeed,
            numeroCde: action.numeroCde
          },
        ],
      }
    default:
      return state;
  }
};

export default reducer;
