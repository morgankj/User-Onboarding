// - [ ]  Get the `Name` input and type a name in it.
// - [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty

describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const fNameInput = () => cy.get('input[name=first_name]');
    const lNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const confirmPasswordInput = () => cy.get('input[name=confirmPassword]');
    const tos = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id="submit"]');

    it('Sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(3 + 4).not.to.equal(8);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('The proper elements are showing', () => {
        fNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitButton().should('exist');
    })

    describe('Filling out the inputs and submitting', () => {
        it('Submit button should start out disabled', () => {
            submitButton().should('be.disabled');
        })

        it('Can type in the name fields', () => {
            fNameInput()
                .should('have.value', '')
                .type('Edward')
                .should('have.value', 'Edward');
            lNameInput()
                .should('have.value', '')
                .type('Cullen')
                .should('have.value', 'Cullen');
            emailInput()
                .should('have.value', '')
                .type('twilight@email.com')
                .should('have.value', 'twilight@email.com');
            passwordInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');
            confirmPasswordInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123');
        })

        it('Can check terms of service on and off', () => {
            tos()
                .should('not.be.checked')
                .click()
                .should('be.checked')
                .click()
                .should('not.be.checked');
        })

        describe('Submitting a new User', () => {
            it('The submit button activates when all fields have been filled', () => {
                fNameInput().type('Edward');
                lNameInput().type('Cullen');
                emailInput().type('twilight@email.com');
                passwordInput().type('password123');
                confirmPasswordInput().type('password123');
                tos().click();
                submitButton().should('not.be.disabled');
            })

            it('The submit button deactivates when you clear a required field', () => {
                fNameInput().type('Edward');
                lNameInput().type('Cullen');
                emailInput().type('twilight@email.com');
                passwordInput().type('password123');
                confirmPasswordInput().type('password123');
                tos().click();
                submitButton().should('not.be.disabled');
                fNameInput().clear();
                submitButton().should('be.disabled');
            })

            it('You are able to submit a new User', () => {
                fNameInput().type('Edward');
                lNameInput().type('Cullen');
                emailInput().type('twilight@email.com');
                passwordInput().type('password123');
                confirmPasswordInput().type('password123');
                tos().click();
                submitButton().click();
            })
        })

        
    })

})