import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loader.css'


export default function CircularUnderLoad() {

  return <CircularProgress style={loaderStyle} className='loader'/>;
}


const loaderStyle = {
    
    width: '10%',
    height: 'auto',
    paddingLeft:' 1%',
    marginLeft:'42%',
    marginTop:'30vh',
    color: "grey"
  

}
