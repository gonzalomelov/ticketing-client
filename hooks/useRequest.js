import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, initialData }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    try {
      const response = await axios.request({ method, url, data });
      console.log(response.data);
      return response.data;
    } catch (error) {
      // let receivedErrors = [{ message: error.message }];
      // if (error.response?.data?.errors) {
      //   receivedErrors = error.response.data.errors;
      // }
      // setErrors(receivedErrors);
      setErrors(error.response.data.errors);

      console.log(error.response.data.errors);
    }
  }

  const updateData = (updatedData) => {
    setData({ ...data, ...updatedData })
  }

  return { updateData, doRequest, errors };
}

export default useRequest;