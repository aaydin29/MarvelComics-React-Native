import axios from 'axios';
import CryptoJS from 'crypto-js';

const publicKey = '2e377760d9a4902a6d6552b5ad088db2';
const privateKey = '09109523d821a3784144fd1a67e482e1e6ce0d31';

const getCharacters = async (limit = 50) => {
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getComics = async (limit = 50) => {
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const apiUrl = `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getSeries = async (limit = 50) => {
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const apiUrl = `https://gateway.marvel.com:443/v1/public/series?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getEvents = async (limit = 50) => {
  const timestamp = new Date().getTime();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const apiUrl = `https://gateway.marvel.com:443/v1/public/events?limit=${limit}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {getCharacters, getComics, getSeries, getEvents};
