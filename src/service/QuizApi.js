import axios from 'axios';
export async function  getQuizData() {
    try{
        let response = await axios.get('http://localhost:8081/api/quiz');
        return response.data;
    }catch(e){
        console.error(e);
    }
}