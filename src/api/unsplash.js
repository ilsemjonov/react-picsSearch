import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID xVxdNsjpiXiGbxO7cU62o7PV1OaqmqEO4wQw5-oxFX0' }
});