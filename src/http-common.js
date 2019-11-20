import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://frontapi.vinchain.io`,
  headers: {
    "Content-Type": "application/json"
  }
});
