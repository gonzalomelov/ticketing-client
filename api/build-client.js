import axios from 'axios';

const buildClient = ({ req }) => {
  let config = {
    timeout: 5000,
  };
  if (typeof window === 'undefined') {
    config = {
      ...config,
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    };
  } else {
    config = {
      ...config,
      baseURL: '/',
    };
  }
  return axios.create(config);
}

export { buildClient };