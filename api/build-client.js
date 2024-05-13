import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
      timeout: 5000,
    });
  } else {
    return axios.create({
      baseURL: '/'
    });
  }
}

export { buildClient };