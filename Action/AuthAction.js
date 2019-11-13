import { LOGIN_ACTION, REGISTER_ACTION } from "./type";
import axios from "axios";
import {LOGIN_URL} from "../Constants/Constants"; 

export function loginHandler(credentials){
    const request = axios.get(LOGIN_URL).then(response=>response.data); 
    return {
        type: LOGIN_ACTION, 
        payload: request
    }
}
