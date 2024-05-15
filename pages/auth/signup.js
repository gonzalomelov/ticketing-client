import AuthForm from "../../components/AuthForm";

const Signup = () => {
  return (
    <AuthForm url='/api/users/signup' formTitle='Sign Up' />
  );
}

export default Signup;