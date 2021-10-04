import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';//Background filled
import ClientCreateDlg from './ClientCreateDlg';


class ClientMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dlgIsOpen:false}      
  };   
  
  // Handle Dlg Open
  openClientCreateDlg = () =>{
    this.setState({dlgIsOpen:true});
  }

  // Dlg Close Callback
  clbkDlgClose = () => {
    console.log("clbkDlgClose");
    this.setState({dlgIsOpen:false});
  };
   //----------------------------------
 
  render() {   
    //console.log("Client Main render");     
    var renderDlg = null;
    if (this.state.dlgIsOpen){
      renderDlg =  <ClientCreateDlg clbkClose={this.clbkDlgClose} />                                              
    }
    return (    
        <>        
        <IconButton onClick={this.openClientCreateDlg} color="primary"> <AddCircleIcon/>Add new Client</IconButton>           
       {renderDlg}
        </>    
    );
}
}

export default ClientMain;