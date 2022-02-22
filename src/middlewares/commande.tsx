/* eslint-disable radix */
import axios from 'axios';
import {
  IMPORT_COMMANDE,
  saveCommande,
  VERIFY_CODE,
  changeStyle,
  IMPORT_BDD,
  DATE_FINDER,
  deliveryList,
  ORDERS_LIST,
  ordersListSave,
  UPDATE_LINE_ORDER,
  updateLine,
  addOrderLine,
} from 'actions/commande';
import { notification } from 'utils/notification';

const commandes = (store) => (next) => (action) => {
  switch (action.type) {
    case IMPORT_COMMANDE: {
      axios
        .post(
          '/import',
          {
            ordersPath: action.ordersPath,
          },
          {
            baseURL: 'http://localhost:5000/commande',
          }
        )
        .then((response) => {
          return store.dispatch(saveCommande(response.data.csvJson.data));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case VERIFY_CODE: {
      axios
        .get(`verify/${action.reference}`, {
          baseURL: 'http://localhost:5000/commande',
        })
        .then((response) => {
          if (response.data.correctCode === false) {
            return store.dispatch(changeStyle(action.reference, response.data.message));
          }
          return store.dispatch(changeStyle(response.data.verifyCode.reference, response.data.message));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case IMPORT_BDD: {
      axios
        .post(
          '/add',
          {
            reference: action.reference,
            quantity: action.quantity,
            dateNeed: action.dateNeed,
            numeroCde: action.numeroCde,
          },
          {
            baseURL: 'http://localhost:5000/commande',
          }
        )
        .then((response) => {
          store.dispatch(
            addOrderLine(
              response.data.newOrder.lastInsertRowid,
              action.reference,
              action.reference,
              action.quantity,
              0,
              action.dateNeed,
              action.numeroCde
            )
          )
          return notification(response.data.message);
        })
        .catch((error) => {
          notification(error);
        });
      break;
    }
    case DATE_FINDER: {
      axios
        .post(
          '/listDate',
          {
            dateNeed: action.dateNeed,
          },
          {
            baseURL: 'http://localhost:5000/commande',
          }
        )
        .then((response) => {
          return store.dispatch(deliveryList(response.data.listOfOrder));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case ORDERS_LIST: {
      axios
        .get('/list', {
          baseURL: 'http://localhost:5000/commande',
        })
        .then((response) => {
          return store.dispatch(ordersListSave(response.data.orderList));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case UPDATE_LINE_ORDER: {
      axios
        .patch(
          `/update/${parseInt(action.id)}`,
          {
            reference: action.reference,
            customRef: action.customRef,
            quantity: parseInt(action.quantity),
            deliveryQuantity: parseInt(action.deliveryQuantity),
            dateNeed: action.dateNeed,
            numeroCde: action.numeroCde,
          },
          { baseURL: 'http://localhost:5000/commande' }
        )
        .then((response) => {
          store.dispatch(
            updateLine(
              parseInt(action.id),
              action.reference,
              action.customRef,
              parseInt(action.quantity),
              parseInt(action.deliveryQuantity),
              action.dateNeed,
              action.numeroCde
            )
          );
          return notification(response.data.message);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default commandes;
