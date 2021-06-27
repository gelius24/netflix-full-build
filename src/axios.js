import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3' 
})

export default instance;

//c388c8cf37d4ddca86d8d4bea694de3d