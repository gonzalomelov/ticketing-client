import { useEffect, useState } from "react";

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