import axios from 'axios';
import { notification } from 'utils/notification';
import { DB_AI_LIST, addListAi } from 'actions/ai';

const ai = (store) => (next) => (action) => {
  switch (action.type) {
    case DB_AI_LIST: {
      axios
        .get('/list', {
          baseURL: 'http://localhost:5000/ai',
        })
        .then((response) => {
          return store.dispatch(addListAi(response.data.aiList));
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

export default ai;
