import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function notification (monMessage) {
  toast.configure();
  const notify = (message) => toast(message);
    return notify(monMessage)
};
