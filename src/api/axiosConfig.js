import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:8080/',
    baseURL: 'http://movieapi-application-env.eba-rfih6tad.eu-west-1.elasticbeanstalk.com/',
    headers: {"skip-browser-warning": "true"}
});