import axios from "axios";

const baseURL = `http://${window.location.hostname}:8081`;

export default axios.create({
    baseURL: baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'ngrok-skip-browser-warning': 'true'
    }
})