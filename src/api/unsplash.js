import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID e4cf9150a69c8587f151ed079ce46757d97e99c497079380d0e77e16020616f2'
    }
});