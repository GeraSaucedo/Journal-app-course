

/*  when authenticated

    {
        uid: asfkljanbsflkjabnsf,
        name: "Gerardo"
    }

*/

//Se crean types para evitar usar strings en las action types
import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
            
        case types.logout:
            return {};
    
        default:
           return state;
    }
}