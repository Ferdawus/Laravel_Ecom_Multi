import {defineStore} from "pinia";
import axios from "axios";


export const useAuth = defineStore("auth",{
    actions:{
        async login(formData){
            // console.log(formData);
           await axios.post(import.meta.env.VITE_API_URL +"/api/v1/user/login",formData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
})