import { LOGIN_ACTION, REGISTER_ACTION } from "../Action/type";

export default function (state={currentAddress: "house no 6, abc road,Guwahti,Assam"}, action){
    switch(action.type){
        case LOGIN_ACTION: 
        return {...state, login: action.payload}

        case REGISTER_ACTION: 
        return {...state, register: action.payload}

        default: 
        return state
    }
}