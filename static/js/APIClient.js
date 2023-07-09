import HTTPClient from './HTTPClient.js';

const API_BASE = '/api';

export default {
    generateImages: (prompt) => {
        return HTTPClient.get(API_BASE + '/generate/' + prompt);
    },
}