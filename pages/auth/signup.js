import { useState } from 'react';
import Router from 'next/router';

import ErrorDisplay from '../../components/ErrorDisplay';
import useRequest from '../../hooks/useRequest';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    data: {
      email,
      password
    },
    onSuccess: (data) => {
      console.log(data);
      Router.push('/');
    }
  });

  const onSubmit = event => {
    event.preventDefault();
    doRequest();
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
      <ErrorDisplay errors={errors} />
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default Signup;