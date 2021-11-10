import React from 'react';

function UserForm(props) {
    const { formValues, formErrors, formSubmit, inputChange, disabled } = props;

    const onSubmit = event => {
        event.preventDefault();
        formSubmit();
    };

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === 'checkbox' ? checked : value;
        inputChange(name, realValue);
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <h2>Add a User</h2>
            <div className="errors">
                <div>{formErrors.first_name}</div>
                <div>{formErrors.last_name}</div>
                <div>{formErrors.email}</div>
                <div>{formErrors.password}</div>
                <div>{formErrors.confirmPassword}</div>
                <div>{formErrors.tos}</div>
            </div>
            <div className="formInputs">
                <label>First Name&nbsp;
                    <input 
                        value = {formValues.first_name}
                        onChange = {onChange}
                        name = 'first_name'
                        type = 'text'
                    />
                </label>
                <label>Last Name&nbsp;
                    <input 
                        value = {formValues.last_name}
                        onChange = {onChange}
                        name = 'last_name'
                        type = 'text'
                    />
                </label>
                <label>Email&nbsp;
                    <input 
                        value = {formValues.email}
                        onChange = {onChange}
                        name = 'email'
                        type = 'email'
                    />
                </label>
                <label>Password&nbsp;
                    <input 
                        value = {formValues.password}
                        onChange = {onChange}
                        name = 'password'
                        type = 'password'
                    />
                </label>
                <label>Confirm Password&nbsp;
                    <input 
                        value = {formValues.confirmPassword}
                        onChange = {onChange}
                        name = 'confirmPassword'
                        type = 'password'
                    />
                </label>
                <label>Terms of Service&nbsp;
                    <input 
                        value = {formValues.tos}
                        onChange = {onChange}
                        name = 'tos'
                        type = 'checkbox'
                    />
                </label>
            </div>
            <button disabled={disabled}>SUBMIT</button>
        </form>
    )
};

export default UserForm;