/// <reference types="cypress" />
const user = {
    email:`fake.email+${Date.now()}@fakemail.com`,
    password: '00000000a',
    last_name: 'Fakename',
    first_name: 'Testname',
    dob_day: '11',
    dob_month: 'November',
    dob_year: '1988',
    city: 'Katsurashima',
    address: '1957-1 Nakagawa, Kamiina District',
    phone_prefix: '+355',
    phone_number: '22444455555'
}

describe('Login and register at staging site', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })

    it('Accept cookies test', () => {
        cy.visit('https://stage-pachipachi.com')
        cy.getCookie('_ga').then(($val) => {
            if ($val == null) {
                cy.log("cookie does not exist - perform accept cookies thing")
                cy.get('.cookies-btn-wrapper', {timeout:15000}).contains('Accept').click()
            } else {
                cy.log("cookie exists (" + $val + ")")
                cy.get('.cookies-btn-wrapper').should('not.exist')
            }
        })
        cy.reload()
        cy.wait(1000)
        cy.getCookie('_ga').then(($val) => {
            if ($val == null) {
                cy.log("cookie does not exist - perform accept cookies thing")
                cy.get('.cookies-btn-wrapper', {timeout:15000}).contains('Accept').click()
            } else {
                cy.log("cookie exists (" + JSON.stringify($val) + ")")
                cy.get('.cookies-btn-wrapper').should('not.exist')
            }
        })
    })

    it('Find the "join" button and click on it', () => {
        cy.visit('https://stage-pachipachi.com')
        cy.get('.login-form').contains("Join", {timeout:15000}).click()
        cy.url().then(($url) => {
            if ($url != "https://www.stage-pachipachi.com/user/sign-up-v2") {
                cy.log("founf button but unresponsive, waiting 5 seconds and trying again...")
                cy.wait(5000)
                cy.get('.login-form').contains("Join").click()
            } else {
                cy.log("Success - login page available.")
            }            
        })
        cy.get('#emailAddress').should('be.visible')
    })
})

describe('Long test - register, login, logout, login again', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })
    it('Register user and log out', () => {
        cy.visit("https://www.stage-pachipachi.com/user/sign-up-v2")
        cy.get('#emailAddress', {timeout: 15000}).type(user.email)
        cy.get('xbet-register-password-input input[type="password"]').type(user.password)
        cy.get('#countries-dropdown input').type('Japan{enter}')
        cy.get('#currency-dropdown input').type('{downArrow}{enter}')
        cy.get('.x-bet-submit-btn').click()
        cy.wait(500)
        cy.get('#lastName').type(user.last_name)
        cy.get('#firstName').type(user.first_name)
        cy.get('#month-dropdown input').type(user.dob_month).type('{enter}')
        cy.get('#day').type(user.dob_day)
        cy.get('#year').type(user.dob_year)
        cy.get('#gender-dropdown input').click()
        cy.get('#gender-dropdown').contains('Male').click()
        cy.get('#locations-dropdown input').click().type(user.city)
        cy.get('#locations-dropdown').contains(user.city).click()
        cy.get('#address').type(user.address)
        cy.get('#phone-prefix input').click().type(user.phone_prefix).type('{enter}')
        cy.get('#phoneNumber').type(user.phone_number)
        cy.get('.x-bet-submit-btn').click()
        cy.log("Wait for things to finish...")
        cy.get('.user-info', {timeout: 15000}).click()
        cy.get('.content-container').contains('Sign Out').click()
        cy.get('.login-form').contains('Log in').should('be.visible')
    })

    it('Log in using latest credentials', () => {
        cy.visit("https://www.stage-pachipachi.com")
        cy.log('Getting rid of cookies modal and giving it some time to fully load...')
        cy.get('.cookies-btn-wrapper', {timeout:15000}).contains('Accept').click()
        cy.wait(5000)
        cy.get('.login-form').contains('Log in').click()
        cy.get('.sign-in-wrapper').should('be.visible')
        cy.get('#loginUsername').type(user.email)
        cy.get('#loginPassword').type(user.password)
        cy.get('#loginButton').click()
        cy.get('.user-info').should('be.visible')
    })
})