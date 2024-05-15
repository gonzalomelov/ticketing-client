import { useState } from "react";
import Router from "next/router";

import useRequest from '../hooks/useRequest';
import ErrorDisplay from "./ErrorDisplay";

const AuthForm = ({ url, formTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { doRequest, errors } = useRequest({
    url,
    method: 'post',
    data: {
      email,
      password
    },
    onSuccess: (data) => {
      Router.push('/');
    }
  })

  const onSubmit = event => {
    event.preventDefault();
    doRequest();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>{formTitle}</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" />
      </div>
      <ErrorDisplay errors={errors} />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AuthForm;