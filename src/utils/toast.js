import { toast } from 'react-toastify';

export const showToast = ( type, message ) => {
  const options = {
    autoClose: 2000,
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: false,
    className: 'toastifyMessage',
  };

  if (type === 'success') {
    toast.success(message, options);
    return;
  }

  toast.error(message, options);
};
