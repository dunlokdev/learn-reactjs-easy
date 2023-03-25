import axiosClient from './axiosClient';

const userApi = {
  getAll(data) {
    const url = '/auth/local/register';
    return axiosClient.get(url, data);
  },
};

export default userApi;
