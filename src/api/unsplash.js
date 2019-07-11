import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ecfec0cd8a8e7b6b9cf0430e60ec12fae2e52e56629fc9b73bf2c3ae018c762c'
    }
});