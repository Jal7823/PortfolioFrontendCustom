import axios from "axios";

const urlBase = "http://localhost:8000";

export const getItems = async (endpoint) => {
  try {
    const response = await axios.get(urlBase + endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error in request: ${error.message}`);
    throw error; 
  }
};

export const getItem = async (endpoint, id) => {
  try {
    const response = await axios.get(`${urlBase}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error in request: ${error.message}`);
    throw error;
  }
};

export const createItem = async (endpoint, data) => {
  try {
    const response = await axios.post(urlBase + endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error in request: ${error.message}`);
    throw error;
  }
};


