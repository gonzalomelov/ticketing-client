import { useEffect, useState } from "react";
import { buildClient } from '../api/build-client';

export async function getServerSideProps(context) {
  try {
    const axios = buildClient(context);
    const { data } = await axios.get('/api/users/current-user');
    const { currentUser } = data;
    return {
      props: {
        currentUser
      }
    };
  } catch (error) {
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