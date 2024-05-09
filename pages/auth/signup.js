import ErrorDisplay from '../../components/ErrorDisplay';
import useRequest from '../../hooks/useRequest';

const Signup = () => {
  const { updateData, doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    initialData: {
      email: '',
      password: ''
    },
  });

  const onSubmit = async event => {
    event.preventDefault();
    const data = await doRequest();
    console.log(data);
  }
  
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input onChange={e => updateData({ email: e.target.value })} className="form-control" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" onChange={e => updateData({ password: e.target.value })} className="form-control" />
      </div>
      <ErrorDisplay errors={errors} />
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
}

export default Signup;