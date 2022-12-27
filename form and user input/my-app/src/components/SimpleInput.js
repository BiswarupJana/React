import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.match(validRegex));





    const inputIsValid = enteredNameIsValid && enteredEmailIsValid;

    useEffect(() => {
        if (inputIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [inputIsValid]);









    const formSubmissionHandler = event => {
        event.preventDefault();


        if (!inputIsValid) {
            return;
        }


        console.log(enteredName);


        resetNameInput();
        resetEmailInput();
    };


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control ';

    const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                <p className="error-text">Name must not be Empty</p>)}
            </div>
            <div className={emailInputClass}>
                <label htmlFor="name">E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && <p className="error-text">E-mail is invalid.</p>}
            </div>
            {/* <div className={nameInputClasses}>
                <label htmlFor="name">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={nameInputChageHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvaild && <p className="error-text">password must not be Empty</p>}
            </div> */}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;