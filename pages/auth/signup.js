import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password
      });
  
      console.log(response.data);
    } catch (error) {
      let receivedErrors = [{ message: error.message }];
      if (error.response?.data?.errors) {
        receivedErrors = error.response.data.errors;
      }
      setErrors(receivedErrors);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input onChange={e => setEmail(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" />
      </div>
      {errors.length > 0 && (
        <div className='alert alert-danger'>
          <h4>Errors:</h4>
          <ul>
            {errors.map(error => <li key={error.message}>{error.message}</li>) }
          </ul>
        </div>
      )}
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default Signup;