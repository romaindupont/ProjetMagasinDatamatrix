import axios from 'axios';
import { notification } from 'utils/notification';
import { DB_MOQ_LIST, addListMoq, ADD_MOQ_IN_DB, UPDATED_MOQ_IN_DB, addMoq, updatedMoq, DELETE_MOQ_IN_DB, deleteMoq } from 'actions/moq';

const moq = (store) => (next) => (action) => {
  switch (action.type) {
    case DB_MOQ_LIST: {
      axios
        .get('/list', {
          baseURL: 'http://localhost:5000/moq',
        })
        .then((response) => {
          return store.dispatch(addListMoq(response.data.moqList));
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case ADD_MOQ_IN_DB: {
      axios
        .post(`/add/${action.reference}`,
          { moq: parseInt(action.moq) },
          { baseURL: 'http://localhost:5000/moq' }
        )
        .then((response) => {
          store.dispatch(addMoq(response.data.newMoq.lastInsertRowid, action.reference, parseInt(action.moq)));
          return notification(response.data.message);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case UPDATED_MOQ_IN_DB: {
      axios
        .put(`/update/${action.id}`,
          { id_ref: action.reference, moq: parseInt(action.moq) },
          { baseURL: 'http://localhost:5000/moq' }
        )
        .then((response) => {
          store.dispatch(updatedMoq(parseInt(action.id), action.reference, parseInt(action.moq)));
          return notification(response.data.message);
        })
        .catch((error) => {
          console.error('Error', error);
        });
      break;
    }
    case DELETE_MOQ_IN_DB: {
      axios
        .delete(`/delete/${action.id}`,
          { baseURL: 'http://localhost:5000/moq' }
        )
        .then((response) => {
          store.dispatch(deleteMoq(parseInt(action.id)));
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

export default moq;
