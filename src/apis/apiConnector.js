import axios from 'axios';
import ApiConfig from './apiConfig';

axios.defaults.baseURL = ApiConfig.baseURL;
axios.defaults.headers.common['Authorization'] = ApiConfig.authToken;

const getAllCards = async () => {
    const res = await axios.get('/credit-cards'); 
    return res.data;
}

const addNewCard = async (data) => {
    return await axios.post('/credit-cards/add', data); 
}

export {
    addNewCard,
    getAllCards
};