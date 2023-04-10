import React from 'react';
// import {ThreeDots} from 'react-loader-spinner';
import classes from './Spinner.module.css';

const Spinner = ({message}) => {
  return (
    // <div  style={{display:'flex', flexDirection: 'column',justifyContent: 'center', width:'100%', height:'100%'}}>
    //   <ThreeDots 
    //     type="Circles"
    //     color="#00BFFF"
    //     height={50}
    //     width={200}
    //     text-align: "center"
    //     ariaLabel='loading ...'
    //    />
    //    <p >{message}</p>
    // </div>

    <div className={classes.spinner}>
  <div className={classes.bounce1}></div>
  <div className={classes.bounce2}></div>
  <div className={classes.bounce3}></div>
  <p>{message}</p>
</div>
  )
}

export default Spinner;
