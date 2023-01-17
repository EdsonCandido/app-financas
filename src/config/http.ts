import axios from "axios";

const https = axios.create({
    baseURL: 'http://localhost:5352'
});

export {https};