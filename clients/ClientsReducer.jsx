
const initialState = {
  formStatus : 'normal',
  formMsg: null
};


export default function ClientsReducer(state = initialState,action)
 {
  switch (action.type) {
  
    case 'CLIENT_FORM_INIT':             
        return {
          ...state,
          formStatus: 'normal',
          formMsg: '',          
        };   
    case 'CLIENT_FORM_SUBMIT':   
        return {
          ...state,
          formStatus: 'loading',
          formMsg: '',          
        };   

    case 'CLIENT_FORM_RESPONSE':    
      
      return {
        ...state,
        formStatus: action.payload.status,
        formMsg: action.payload.msg,
        
      };   
  
    default:  
      return state;
  }
}
