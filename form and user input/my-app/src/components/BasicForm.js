import useInput from '../hooks/use-input';



const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        rest: resetFirstNameInput
    } = useInput(value => value.trim() !== '');
    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        rest: resetLastNameInput
    } = useInput(value => value.trim() !== '');

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim() !== '' && value.match(validRegex));



    const inputIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

    var formIsValid = false;
    if (inputIsValid) {
        formIsValid = true;
    };


    const formSubmissionHandler = event => {
        event.preventDefault();

        if (!inputIsValid) {
            return;

        }
        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();


    };

    const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control ';
    const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control ';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control ';

    return (
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
                    {firstNameInputHasError && (
                        <p className='error-text'>First Name must not be empty.</p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        onChange={lastNameChangedHandler}
                        onBlur={lastNameBlurHandler}
                        value={enteredLastName}
                    />
                    {lastNameInputHasError && (
                        <p className='error-text'>Last Name must not be empty.</p>
                    )}
                </div>
                <div className={emailInputClasses}>
                    <label htmlFor="name">E-Mail Address</label>
                    <input 
                    type="email" 
                    id="name" 
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                    />
                    {emailInputHasError && <p className="error-text">E-mail is invalid.</p>}
            
                </div>
                <div className="form-actions">
                    <button disabled={!formIsValid}>Submit</button>
                </div>
            </div>
        </form>
    );
}

export default BasicForm;