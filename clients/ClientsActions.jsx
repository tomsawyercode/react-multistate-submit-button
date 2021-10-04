import axios from 'axios';


//-----------------------
// Form =>  Create, Update, Delete
//-----------------------
export function actClientCreate(d) {return actClientsFormApi(d,"clientsresponse")};
export function actClientUpdate(d) {return actClientsFormApi(d,"clientsresponse")};
export function actClientDelete(d) {return actClientsFormApi(d,"clientsresponse")};

//------------------------------------------------------
function actClientsFormApi(d,url) { 
   
  return dispatch => {
    dispatch(actClientFormSubmit());// for processing advice msg

    axios.post(process.env.REACT_APP_API_BASE_URL+url,d, {withCredentials: true})
    .then(response => { dispatch(actClientFormResponse(response.data));})
    .catch(error => { dispatch(actClientFormResponse({status:'error',msg:error.message}))})                    
        
  };
}

export const actClientFormInit = () => ({
  type: 'CLIENT_FORM_INIT'  
});
export const actClientFormSubmit = () => ({
  type: 'CLIENT_FORM_SUBMIT'  
});
export const actClientFormResponse = (response) => ({
  type: 'CLIENT_FORM_RESPONSE',
  payload : response
});







