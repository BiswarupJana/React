import { useState } from 'react';
import useInput from '../hooks/use-input';



const BasicForm=(props)=>{

    const {
        value:enteredFirstName,
        isValid:firstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        rest: resetFirstNameInput
    }=useInput(value => value.trim() !=='' );
    const {
        value:enteredLastName,
        isValid:lastNameIsValid,
        hasError: lastNameInputError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        rest: resetLastNameInput
    }=useInput(value => value.trim() !=='' );

    const inputIsValid = firstNameIsValid ;

    var formIsValid=false;
    if(inputIsValid){
        formIsValid=true;
    };




    const formSubmissionHandler =event=>{
        event.preventDefault();

        if(!inputIsValid){
            return;
            
        }
        resetFirstNameInput();
        resetLastNameInput();

        
    };

    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control ';

    return(
        <form onSubmit={formSubmissionHandler} >
            <div className="control-group">
                <div className={firstNameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input 
                    type="text" 
                    id="first-name" 
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler}
                    value={enteredFirstName}
                    />

                </div>
                <div className="form-control">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="name">E-Mail Address</label>
                    <input type="email" id="name" />
                </div>
                <div className="form-actions">
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default BasicForm;