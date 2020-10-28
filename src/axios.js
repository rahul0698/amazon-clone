import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-3aaab/us-central1/api'
    //'https://us-central1-clone-3aaab.cloudfunctions.net/api'
        //'http://localhost:5001/clone-3aaab/us-central1/api' // the api cloud function URL
});

export default instance;