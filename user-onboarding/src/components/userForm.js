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
                </label><br/>
                <label>Last Name&nbsp;
                    <input 
                        value = {formValues.last_name}
                        onChange = {onChange}
                        name = 'last_name'
                        type = 'text'
                    />
                </label><br/>
                <label>Email&nbsp;
                    <input 
                        value = {formValues.email}
                        onChange = {onChange}
                        name = 'email'
                        type = 'email'
                    />
                </label><br/>
                <label>Password&nbsp;
                    <input 
                        value = {formValues.password}
                        onChange = {onChange}
                        name = 'password'
                        type = 'password'
                    />
                </label><br/>
                <label>Confirm Password&nbsp;
                    <input 
                        value = {formValues.confirmPassword}
                        onChange = {onChange}
                        name = 'confirmPassword'
                        type = 'password'
                    />
                </label><br/>
                <label>Terms of Service&nbsp;
                    <input 
                        value = {formValues.tos}
                        onChange = {onChange}
                        name = 'tos'
                        type = 'checkbox'
                    />
                </label><br/>
            </div>
            <button disabled={disabled} id="submit">SUBMIT</button>
        </form>
    )
};

export default UserForm;