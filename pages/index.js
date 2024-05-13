import axios from 'axios';
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/current-user',
      {
        headers: context.req.headers,
        timeout: 5000,
      }
    );
    const { currentUser } = response.data;
    return {
      props: {
        currentUser
      }
    };
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        currentUser: null
      }
    };
  }
}

const LandingPage = ({ currentUser }) => {
  const [message, setMessage] = useState('Not logged In')

  useEffect(() => {
    setMessage(currentUser ? `${currentUser.email}. Logged In` : 'Not logged In');
  }, [currentUser]);

  return (
    <div>{message}</div>
  );
}

export default LandingPage;