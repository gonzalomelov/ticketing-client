import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, data, onSuccess }) => { 
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    try {
      setErrors([]);
      const response = await axios.request({ method, url, data });
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      // let receivedErrors = [{ message: error.message }];
      // if (error.response?.data?.errors) {
      //   receivedErrors = error.response.data.errors;
      // }
      // setErrors(receivedErrors);
      setErrors(error.response.data.errors);
    }
  }

  return { doRequest, errors };
}

export default useRequest;