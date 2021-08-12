import axios from 'axios';

const API_URL = 'http://localhost:8080';

class MapService{

    retrieveData(){
        return axios.get(`${API_URL}/table/data`);
    }

}

export default new MapService();