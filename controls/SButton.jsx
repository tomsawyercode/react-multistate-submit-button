import React from "react";

import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {LoadingIcon,WarningIcon} from './SButtonIcons'


class SButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view:'idle'};   
    }

  
   //Called immediately after updating occurs. Not called for the initial render.
   componentDidUpdate(prevProps, prevState, snapshot) {

      //console.log("SButton componentDidUpdate, props:",this.props.status);
      
      //Only listen to status change,      
      if (prevProps.status === this.props.status) return; // avoid re call "componentDidUpdate" when view change


      if (this.props.status === 'normal' ||this.props.status === 'loading' )
      {
        this.setState({view: 'idle'});
      }      
      
      // ['warning','error','success']
      if (this.props.status === 'warning' ||this.props.status === 'error' || this.props.status === 'success'){          
       this.setState({view: 'wait'});
       this.timer = setTimeout(()=> {//console.log("Timeout");                                     
                                    this.setState({view: 'timeout'});                                    
                                    }, 3000);
       }
   }

   componentWillUnmount(){
     clearTimeout(this.timer);
    }

   render() {      
      
      var icon;

      if (this.state.view==='timeout')
      { //when timeout, set the normal color to light blue 
        icon = <CheckCircleIcon style={{ color: '#1976d2' }}/>
      }
      else //view==[idle or wait], or in first render
      {
      // first render  
      if ( !this.props.status || this.props.status==='normal') {icon = <CheckCircleIcon style={{ color: '#1976d2' }}/> }
      // after submit
      if (this.props.status==='loading' ) {icon = <LoadingIcon/>}
      if (this.props.status==='warning') {icon = <WarningIcon  /> }
      if (this.props.status==='error') {icon = <WarningIcon color={'red' }/> }
      if (this.props.status==='success') {icon = <CheckCircleIcon style={{ color: 'green' }}/> }
      }
       
      // Avoid re-click when status==='loading'
      // type={this.props.status==='normal'?"button":"submit"}

      return (
        <>
        <IconButton {...this.props}  type={this.props.status==='loading'?"button":"submit"}  > 
          {icon}
        </IconButton>       
        </>               
      );
  }
}

export default SButton; 




  