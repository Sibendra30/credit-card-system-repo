import axios from 'axios';

const getAllCards = async () => {
    const res = await axios.get('http://localhost:8081/credit-cards'); 
    return res.data;
}

const addNewCard = async (data) => {
    return await axios.post('http://localhost:8081/credit-cards/add', data); 
}

export {
    addNewCard,
    getAllCards
};