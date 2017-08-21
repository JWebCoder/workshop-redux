import axios from 'axios';

const getUser = id => {
  return axios.get(`http://swapi.co/api/people/${id}/`);
}

export default getUser;
