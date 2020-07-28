import axios from "axios";

export function fetchFieldsById(clientId) {
  return axios.get(`/client/${clientId}`);
}
