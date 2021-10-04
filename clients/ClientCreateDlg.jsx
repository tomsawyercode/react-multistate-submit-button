import React, { useState,useEffect } from 'react';
//import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';

//import useMediaQuery from '@material-ui/core/useMediaQuery';
//import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//Icons
import IconButton from "@material-ui/core/IconButton";
//import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

//Custom controls
import DialogTitle from  "../controls/DialogTitle";
import SButton from '../controls/SButton';


//Redux
import { connect } from "react-redux";
import { actClientCreate, actClientFormInit } from "./ClientsActions";


function ClientCreateDlg(props){

  const initial = {  name:'',phone:'', mail:'',}; 
  const [data, setData] = useState(initial);  
  
  //Mount - Unmount  
  useEffect(() => {
    props.dispatch(actClientFormInit());  //componentMount    
    //console.log("component Mount");
   return () => {
    props.dispatch(actClientFormInit());  //componentWillUnmount    
    //console.log("component WillUnmount");
   };
 }, []);

   //componentDidUpdate  status listener  
   // When success, auto close after 1 second
  useEffect(() => {
    console.log("status:", props.status);
    var timer;
    if( props.status==='success') 
    {
       timer = setTimeout(() => { handleClose()}, 1000);
    }
    return () => clearTimeout(timer);
     }, [props.status]); 
  
  const handleClose = () => {   //console.log("handleClose");     
      props.clbkClose();
  };
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setData(prevState => ({...prevState,[name]: value}));  
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit:");
    console.log("  data:",data);   
    e.preventDefault();  // prevent a browser reload/refresh
    props.dispatch(actClientCreate(data)); 

  };
      
    const { status, msg } = props; // server API responses   

    var advice = null;         
    if (status === "loading") advice = "Procesing...";    
    if (status === "error") advice =  "Error: " + msg;   
    if (status === "warning") advice =  "Warning: " + msg;      
    if (status === "success") advice = "Data was saved."; 
    
  
    return (
        <Dialog onClose={handleClose}  open={true}>
        <div style={{minWidth:'300px', maxWidth:'400px',minHeight:'200px', padding:"2px",display: "flex" ,flexDirection: "column"}}>
        <DialogTitle ><ViewHeadlineIcon  />Create new Client:</DialogTitle>          
        <form onSubmit={handleSubmit} >
        
        <div style={{minWidth:'50%',boxSizing:'border-box',padding:"2px",display: "flex" ,flexDirection: "column",flexGrow:'1'}}>         
          <TextField name="name"   size="small" placeholder="Name"  onChange={handleChange} />  
          <TextField name="phone"  size="small" placeholder="Phone" onChange={handleChange} />  
          <TextField name="mail"   size="small" placeholder="Mail"  onChange={handleChange} />     
        </div>        

        <div style={{           
           display: "flex" ,                    
           flexDirection: "row",      
           alignItems: "center",
           justifyContent: "space-around" }}> 

        <SButton status={status} />    
        <IconButton  onClick={handleClose}  > <CancelIcon/></IconButton>   
        </div>    

        <Typography  variant='caption' style={{fontWeight:'600',textIndent:'6px'}} noWrap>
          {advice}
        </Typography>                       
       
        </form>
        </div>
        </Dialog>  
    
)

};

const mapStateToPropsForm = state => ({    
  status:state.clients.formStatus,
  msg:state.clients.formMsg,   
});

export default connect(mapStateToPropsForm)(ClientCreateDlg);


