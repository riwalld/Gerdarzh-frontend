import axios from "axios";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  ? import.meta.env.VITE_BACKEND_URL
  : "http://localhost:8000";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
  ? import.meta.env.VITE_API_ENDPOINT
  : "/api";

const PROPERNOUN_ENDPOINT = import.meta.env.VITE_MEDIA_ENDPOINT
  ? import.meta.env.VITE_MEDIA_ENDPOINT
  : "/properNouns/propernoun";

export const API_URL = BACKEND_URL + API_ENDPOINT;
export const PROPERNOUN_URL = BACKEND_URL + PROPERNOUN_ENDPOINT;
const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

export const apiAxios = axios.create({
  baseURL: API_URL,
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
});

export const properNounAxios = axios.create({
  baseURL: PROPERNOUN_URL,
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,
});

export async function getPropernoun(currentName: string) {
  try {
    const response = await fetch(PROPERNOUN_URL + `?current_name=${currentName}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
    return null;
  }
}

export function getImage(imageName: string) {
  return "/media/images/" + imageName + '.jpg';
}