import axios from 'axios';

const API_URL = 'http://localhost:8080'

class ListarDados{
    retrieveData(){
        return axios.get(`${API_URL}/dados/tabela`)
    }
}

export default new ListarDados();