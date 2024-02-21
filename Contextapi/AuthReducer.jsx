const authReducer = (state, action)  =>{
     switch (action.type) {
        case "login":{
          return  {currentUser : action.payload}
        }
            
            break;
            case "logout":{
               return {currentUser : null}
            }
          
            break;
        default:
            break;
     }
} 


export default authReducer ;

