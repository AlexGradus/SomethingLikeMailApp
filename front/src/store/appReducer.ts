const SET_USER = "SET_USER";
const LOGOUT ="LOGOUT";
const SET_MESSAGE ="SET_MESSAGE";

const defaultState = {
currentUser: '',
currentMessage:[[]],

}

export default function appReducer(state=defaultState,action: {
    message: any; type: any; user: any; 
}){
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                currentUser:action.user,
               

            }
            case LOGOUT:
                localStorage.removeItem("user");
            return{
                ...state,
                currentUser:'',

            }
            case SET_MESSAGE:
            return{
                ...state,
                currentMessage:action.message,

            }
            
        default:
            return state;
    }
}

export const setUser = (user: any) =>({type: SET_USER,user: user});
export const newMessage = (message: any) =>({type: SET_MESSAGE,message: message});
export const logout = () =>({type: LOGOUT});