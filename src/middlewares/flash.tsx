import axios from 'axios';
import { notification } from 'utils/notification';
import { SAVE_DB_AI, removeFlashList } from '../actions/flash';

const flash = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_DB_AI: {
      axios
        .post(
          `/save/${action.id}`,
          {
            qDelivery: action.qDelivery,
            paletNumber: action.paletNumber,
            list: action.list,
          },
          {
            baseURL: 'http://localhost:5000/commande',
          }
        )
        .then((response) => {
          store.dispatch(removeFlashList(action.id));
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

export default flash;
