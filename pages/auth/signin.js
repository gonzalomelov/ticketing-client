import AuthForm from "../../components/AuthForm";

const Signin = () => {
  return (
    <AuthForm url='/api/users/signin' formTitle='Sign In' />
  )
}

export default Signin;