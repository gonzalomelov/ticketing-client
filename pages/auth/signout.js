import { useEffect } from "react"
import Router from 'next/router';
import useRequest from "../../hooks/useRequest";

const Signout = () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    onSuccess: (data) => Router.push('/')
  })

  useEffect(() => doRequest(), []);
  
  return (
    <div>
      Signing out...
    </div>
  )
}

export default Signout;