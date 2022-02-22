export const IMPORT_COMMANDE = 'IMPORT_COMMANDE';
export const importCommande = (ordersPath: string) => ({
  type: IMPORT_COMMANDE,
  ordersPath,
});

export const SAVE_COMMANDE = 'SAVE_COMMANDE';
export const saveCommande = (csv: string) => ({
  type: SAVE_COMMANDE,
  csv,
});

export const REMOVE_ORDER = 'REMOVE_ORDER';
export const removeOrder = () => ({
  type: REMOVE_ORDER,
});

export const VERIFY_CODE = 'VERIFY_CODE';
export const verifyCode = (reference: string) => ({
  type: VERIFY_CODE,
  reference,
});

export const CHANGE_STYLE = 'CHANGE_STYLE';
export const changeStyle = (reference: string, css: string) => ({
  type: CHANGE_STYLE,
  reference,
  css,
});

export const IMPORT_BDD = 'IMPORT_BDD';
export const importBdd = (
  reference: string,
  quantity: number,
  dateNeed: string,
  numeroCde: string
) => ({
  type: IMPORT_BDD,
  reference,
  quantity,
  dateNeed,
  numeroCde,
});

export const DATE_FINDER = 'DATE_FINDER';
export const dateFinder = (dateNeed: string) => ({
  type: DATE_FINDER,
  dateNeed,
});

export const DELIVERY_LIST = 'DELIVERY_LIST';
export const deliveryList = (list: string) => ({
  type: DELIVERY_LIST,
  list,
});

export const SAVE_ID_DELIVERY = 'SAVE_ID_DELIVERY';
export const saveIdDelivery = (id: number) => ({
  type: SAVE_ID_DELIVERY,
  id,
});

export const ORDERS_LIST = 'ORDERS_LIST';
export const ordersList = () => ({
  type: ORDERS_LIST,
});

export const ORDERS_LIST_SAVE = 'ORDERS_LIST_SAVE';
export const ordersListSave = (list: string) => ({
  type: ORDERS_LIST_SAVE,
  list,
});

export const SELECT_LINE = 'SELECT_LINE';
export const selectLine = (
  id: number,
  reference: string,
  customRef: string,
  quantity: number,
  deliveryQuantity: number,
  dateNeed: string,
  numeroCde: string
) => ({
  type: SELECT_LINE,
  id,
  reference,
  customRef,
  quantity,
  deliveryQuantity,
  dateNeed,
  numeroCde,
});

export const CHANGE_VALUE_ORDER = 'CHANGE_VALUE_ORDER';
export const changeValueOrder = (newValue: string, key: string) => ({
  type: CHANGE_VALUE_ORDER,
  newValue,
  key,
});

export const UPDATE_LINE_ORDER = 'UPDATE_LINE_ORDER';
export const updateLineOrder = (
  id: number,
  reference: string,
  customRef: string,
  quantity: number,
  deliveryQuantity: number,
  dateNeed: string,
  numeroCde: string
) => ({
  type: UPDATE_LINE_ORDER,
  id,
  reference,
  customRef,
  quantity,
  deliveryQuantity,
  dateNeed,
  numeroCde,
});

export const UPDATE_LINE = 'UPDATE_LINE';
export const updateLine = (
  id: number,
  reference: string,
  customRef: string,
  quantity: number,
  deliveryQuantity: number,
  dateNeed: string,
  numeroCde: string
) => ({
  type: UPDATE_LINE,
  id,
  reference,
  customRef,
  quantity,
  deliveryQuantity,
  dateNeed,
  numeroCde,
});

export const ADD_ORDER_LINE = 'ADD_ORDER_LINE';
export const addOrderLine = (
  id: number,
  reference: string,
  customRef: string,
  quantity: number,
  deliveryQuantity: number,
  dateNeed: string,
  numeroCde: string
) => ({
  type: ADD_ORDER_LINE,
  id,
  reference,
  customRef,
  quantity,
  deliveryQuantity,
  dateNeed,
  numeroCde,
});
