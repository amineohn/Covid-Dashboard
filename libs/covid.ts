import axios from "axios";

const userEndpoint = `https://coronavirusapifr.herokuapp.com/data/live/france`;

export const fetchCovid = async () => {
  return await axios.get(userEndpoint);
};
