import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = async body => {
  const { data } = await axios.post('/users/signup', body);
  return data;
};
