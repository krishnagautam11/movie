import axios from "axios";

const API_KEY = "265e4832988cc479ac9414f05cd2dcf4";
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
    baseURL: BASE_URL,
    params: { api_key: API_KEY, language: "en-US" },
});