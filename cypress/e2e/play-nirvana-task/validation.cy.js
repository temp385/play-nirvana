/// <reference types="cypress" />

const user = {
    email:`fake.email+${Date.now()}@fakemail.com`
}

describe('Short tests - form validation', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })
    it('Registration field validations', () => {
        cy.visit("https://www.stage-pachipachi.com/user/sign-up-v2")
        cy.get('.x-bet-submit-btn', {timeout: 15000}).click()
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')

        cy.get('#emailAddress').clear().type('x')
        cy.get('.x-bet-submit-btn').click()
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Email is not valid').should('be.visible')

        cy.get('#emailAddress').clear().type('x.x@x.x')
        cy.get('.x-bet-submit-btn').click()
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Email is not valid').should('be.visible')

        cy.get('#emailAddress').clear().type('zunic.tom+01@gmail.com')
        cy.get('.x-bet-submit-btn').click()
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Already taken').should('be.visible')

        cy.get('#emailAddress').clear().type(user.email)
        cy.get('.x-bet-submit-btn').click()
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Already taken').should('not.exist')
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Email is not valid').should('not.exist')
        cy.get('#emailAddress').parent().find('xbet-form-feedback').contains('Already taken').should('not.exist')

        cy.get('xbet-register-password-input input[type="password"]').as('password_input')
        cy.get('@password_input').clear().type("x")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('Needs to be at least 8 characters long').should('be.visible')
        cy.get('xbet-register-password-input').contains('Need to contain at least 1 digit').should('be.visible')

        cy.get('@password_input').clear().type("0")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('Needs to be at least 8 characters long').should('be.visible')
        cy.get('xbet-register-password-input').contains('Needs to contain at least 1 letter').should('be.visible')

        cy.get('@password_input').clear()
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('This field is required').should('be.visible')
        cy.get('xbet-register-password-input').contains('Needs to contain at least 1 letter').should('be.visible')
        cy.get('xbet-register-password-input').contains('Need to contain at least 1 digit').should('be.visible')

        cy.get('@password_input').clear().type('00000000')
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('Needs to contain at least 1 letter').should('be.visible')

        cy.get('@password_input').clear().type('aaaaaaaa')
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('Need to contain at least 1 digit').should('be.visible')

        cy.get('@password_input').clear().type('aaaa aaaa1')
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-register-password-input').contains('validation.hasWhitespaces').should('be.visible')

        cy.get('@password_input').clear().type('00000000a')
        cy.get('.x-bet-submit-btn').click()

        cy.get('#lastName').clear().type("X")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be at least 2 characters long').should('be.visible')

        cy.get('#lastName').clear()
        cy.get('.x-bet-submit-btn').click()
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')

        cy.get('#lastName').clear().type("123456789012345678901234567890123456789012345678901")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be shorter than 50 characters long').should('be.visible')

        cy.get('#lastName').clear().type("Normal Last Name")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be shorter than 50 characters long').should('not.exist')
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('not.exist')
        cy.get('#lastName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be at least 2 characters long').should('not.exist')

        cy.get('#firstName').clear().type("X")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be at least 2 characters long').should('be.visible')

        cy.get('#firstName').clear()
        cy.get('.x-bet-submit-btn').click()
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')

        cy.get('#firstName').clear().type("123456789012345678901234567890123456789012345678901")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be shorter than 50 characters long').should('be.visible')

        cy.get('#firstName').clear().type("Normal First Name")
        cy.get('.x-bet-submit-btn').click()
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be shorter than 50 characters long').should('not.exist')
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('not.exist')
        cy.get('#firstName').scrollIntoView().parent().find('xbet-form-feedback').contains('Needs to be at least 2 characters long').should('not.exist')

        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#month-dropdown input').type("November").type('{enter}')
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('Incomplete date').should('be.visible')

        cy.get('#day').type("32")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('Incomplete date').should('be.visible')

        cy.get('#year').type("1988")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('This is not a valid date').should('be.visible')

        cy.get('#day').clear().type("11")
        cy.get('#year').clear().type("2020")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('Player needs to be at least 20 years old').should('be.visible')

        cy.get('#day').clear().type("11")
        cy.get('#year').clear().type("1988")
        cy.get('.x-bet-submit-btn').click()
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('Player needs to be at least 20 years old').should('not.exist')
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('This is not a valid date').should('not.exist')
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('Incomplete date').should('not.exist')
        cy.get('xbet-date-input').scrollIntoView().find('xbet-form-feedback').contains('This field is required').should('not.exist')

        cy.get('#locations-dropdown input').click().type("-")
        cy.get('#zipcode').type("-")
        cy.get('#address').type("-")
        cy.get('.x-bet-submit-btn').click()

        cy.get('#locations-dropdown input').clear()
        cy.get('#zipcode').clear()
        cy.get('#address').clear()
        cy.get('.x-bet-submit-btn').click()

        cy.get('#locations-dropdown input').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#zipcode').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#address').scrollIntoView().parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')

        cy.get('[controlname="acceptPromoNotifications"] .checkbox-wrapper').click({ force: true })
        cy.get('[controlname="acceptTermsAndConditions"] .checkbox-wrapper').click({ force: true })
        cy.get('[controlname="acceptPrivacyPolicy"] .checkbox-wrapper').click({ force: true })
        cy.get('.x-bet-submit-btn').click()
        cy.get('[controlname="acceptTermsAndConditions"]').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')

    })

    it('Log-in field validations', () => {
        cy.visit("https://www.stage-pachipachi.com")
        cy.get('.login-form', {timeout: 15000}).contains('Log in').click()
        cy.get('.sign-in-wrapper').should('be.visible')
        cy.get('#loginButton').click()
        cy.get('#loginUsername').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#loginPassword').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#loginUsername').type('Invalid.email')
        cy.get('#loginPassword').type('Invalid.password')
        cy.get('#loginButton').click()
        cy.get('xbet-sign-in-step-one').contains('Username or password is incorrect.').should('be.visible')
        cy.get('#loginUsername').clear().type('Empty.password')
        cy.get('#loginPassword').clear()
        cy.get('#loginButton').click()
        cy.get('xbet-sign-in-step-one').contains('Username or password is incorrect.').should('be.visible')
        cy.get('#loginPassword').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')
        cy.get('#loginUsername').clear()
        cy.get('#loginPassword').clear().type('Empty.username')
        cy.get('#loginButton').click()
        cy.get('xbet-sign-in-step-one').contains('Username or password is incorrect.').should('be.visible')
        cy.get('#loginUsername').parent().find('xbet-form-feedback').contains('This field is required').should('be.visible')


    })
})