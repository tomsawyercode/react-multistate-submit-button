import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

export function LoadingIcon(props) {
  return (
  <SvgIcon   viewBox="0 0 24 24" style={{ width: 24, height:24  }} > 
   <circle fill="#1976d2" cx="12" cy="12" r="10" />        
        <g transform="translate(2.2 2.2) scale(0.8)"   >
        <path        
         d= 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z' 
         fill="#FFFFFF" strokeWidth="0" >
          <animateTransform attributeName="transform" type="rotate" from="360 12 12" to="0 12 12" dur="1.5s" repeatCount="indefinite">
        </animateTransform>
        </path>
        </g>
  
  </SvgIcon>
);
}

export function WarningIcon(props) {
    return (
    <SvgIcon   viewBox="0 0 24 24" style={{ width: 24, height:24  }} > 
     <circle fill={props.color ? props.color :'orange' } cx="12" cy="12" r="10" />        
        <g transform="translate(2.2 2.2) scale(0.8)"   >
        <path    
         d= 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z'
         fill="#FFFFFF" strokeWidth="0" >      
        </path>
        </g>
    </SvgIcon>
  );
  }