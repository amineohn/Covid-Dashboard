import axios from "axios";

const userEndpoint = `https://coronavirusapifr.herokuapp.com/data/live/france`;
const userEndPoint2 = `https://coronavirusapifr.herokuapp.com/data/live/departements`;
export const fetchCovid = async () => {
  return await axios.get(userEndpoint);
};
export const fetchByDepartement = async () => {
  return await axios.get(userEndPoint2);
};
