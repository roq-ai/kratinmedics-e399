import axios from 'axios';
import queryString from 'query-string';
import { SeniorUserInterface, SeniorUserGetQueryInterface } from 'interfaces/senior-user';
import { GetQueryInterface } from '../../interfaces';

export const getSeniorUsers = async (query?: SeniorUserGetQueryInterface) => {
  const response = await axios.get(`/api/senior-users${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSeniorUser = async (seniorUser: SeniorUserInterface) => {
  const response = await axios.post('/api/senior-users', seniorUser);
  return response.data;
};

export const updateSeniorUserById = async (id: string, seniorUser: SeniorUserInterface) => {
  const response = await axios.put(`/api/senior-users/${id}`, seniorUser);
  return response.data;
};

export const getSeniorUserById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/senior-users/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSeniorUserById = async (id: string) => {
  const response = await axios.delete(`/api/senior-users/${id}`);
  return response.data;
};
