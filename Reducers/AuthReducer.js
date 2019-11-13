import { LOGIN_ACTION, REGISTER_ACTION } from "../Action/type";

export default function (state={}, action){
    switch(action.type){
        case LOGIN_ACTION: 
        return {...state, login: action.payload}

        case REGISTER_ACTION: 
        return {...state, register: action.payload}

        default: 
        return state
    }
}