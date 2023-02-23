import {defineStore} from "pinia";
import axios from "axios";


export const useAuth = defineStore("auth",{

    state:() =>({ errors:{}, }),
    actions:{
        async login(formData){
            // console.log(formData);
           await axios.post(import.meta.env.VITE_API_URL +"/api/v1/user/login",formData)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                if (error.response.data) {
                    this.errors = error.response.data.errors                        
                }
            })
        }
    }
})