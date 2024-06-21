/// <reference types="cypress" />
var epoch_uniqe_sufix = Date.now();

const api_data_register = {
    // request_url: 'https://playerapi.stage-xtreme.com/api/public/registration/register?t=afe07f47-9ef8-48bd-80d1-ebc5a4f38704&lang=en&v=1.1.1642',
    request_url: 'https://playerapi.stage-xtreme.com/api/public/registration/register',
    request_tenant: 't=afe07f47-9ef8-48bd-80d1-ebc5a4f38704',
    request_language: 'lang=en',
    request_version: 'v=1.1.1642',
    request_method: 'POST'
}
const api_payload_register = {
    "firstName": `user${epoch_uniqe_sufix}`,
    "lastName": `test${epoch_uniqe_sufix}`,
    "phoneNumber": `355${epoch_uniqe_sufix}`,
    "acceptPromoNotifications": true,
    "acceptPrivacyPolicy": true,
    "acceptTermsAndConditions": true,
    "currencyId": "EUR",
    "countryNumericCode": 392,
    "emailAddress": `test.user${epoch_uniqe_sufix}@fakemail.com`,
    "password": "00000000a",
    "city": "Katsurashima (Nagano Ken, Kamiina Gun)",
    "cityAutocomplete": true,
    "zipCode": "399-3803",
    "genderType": "Male",
    "address": "address",
    "dateOfBirth": "1988-11-11",
    "session": "Web;01903323-1d26-71ed-a8f0-cfe22571328e;rIGie+Z6iXiBq2heMMGo2Q==;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",
    "clientId": "01f515b2-e3ec-4dc3-891d-2f87f60eed6c",
    "clientType": "WebConsumer",
    "deviceId": "01903325-7bd5-7298-8bfb-e7af9e5a139f",
    "acceptEmailSmsNotifications": true,
    "taxNumber": null,
    "skipTaxNumberCheck": true,
    "bankAccountNumber": null
}

const api_data_login = {
    // request_url: 'https://playerapi.stage-xtreme.com/api/public/player/login?t=afe07f47-9ef8-48bd-80d1-ebc5a4f38704&lang=en&v=1.1.1642',
    request_url: 'https://playerapi.stage-xtreme.com/api/public/player/login',
    request_tenant: 't=afe07f47-9ef8-48bd-80d1-ebc5a4f38704',
    request_language: 'lang=en',
    request_version: 'v=1.1.1642',
    request_method: 'POST'
}

describe('API user register POST... something...', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
    })
    context("POST /register", function () {
        it("register a new user using API", function () {   
            let full_request_url = api_data_register.request_url 
            full_request_url += "?" + api_data_register.request_tenant
            cy.request(api_data_register.request_method, full_request_url, {
                firstName: api_payload_register.firstName,
                lastName: api_payload_register.lastName,
                phoneNumber: api_payload_register.phoneNumber,
                acceptPromoNotifications: api_payload_register.acceptPromoNotifications,
                acceptPrivacyPolicy: api_payload_register.acceptPrivacyPolicy,
                acceptTermsAndConditions: api_payload_register.acceptTermsAndConditions,
                currencyId: api_payload_register.currencyId,
                countryNumericCode: api_payload_register.countryNumericCode,
                emailAddress: api_payload_register.emailAddress,
                password: api_payload_register.password,
                city: api_payload_register.city,
                cityAutocomplete: api_payload_register.cityAutocomplete,
                zipCode: api_payload_register.zipCode,
                genderType: api_payload_register.genderType,
                address: api_payload_register.address,
                dateOfBirth: api_payload_register.dateOfBirth,
                // "session": "Web;01903323-1d26-71ed-a8f0-cfe22571328e;rIGie+Z6iXiBq2heMMGo2Q==;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",
                clientId: api_payload_register.clientId,
                clientType: api_payload_register.clientType,
                deviceId: api_payload_register.deviceId,
                acceptEmailSmsNotifications: api_payload_register.acceptEmailSmsNotifications,
                taxNumber: api_payload_register.taxNumber,
                skipTaxNumberCheck: api_payload_register.skipTaxNumberCheck,
                bankAccountNumber: api_payload_register.bankAccountNumber
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.registrationToken).to.exist;
                cy.log("Registration token = " + response.body.registrationToken)
            });
        });
    });

    context("POST /login", function () {
        it("login with used credentials using API", function () {    
            cy.log('Wait a few seconds to process registration, to prevent "unprocessed" error...')
            cy.wait(5000)
            let full_request_url = api_data_login.request_url 
            full_request_url += "?" + api_data_login.request_tenant
            // full_request_url += "&" + api_data_login.request_language
            // full_request_url += "&" + api_data_login.request_version
            cy.request({
                method: api_data_login.request_method,
                url: full_request_url,
                body: {
                    clientId: api_payload_register.clientId,
                    clientType: api_payload_register.clientType,
                    deviceId: api_payload_register.deviceId,
                    password: api_payload_register.password,
                    username: api_payload_register.emailAddress
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.token).to.exist;
                cy.log("Token = " + response.body.token)
                expect(response.body.refreshToken).to.exist;
                cy.log("RefreshToken = " + response.body.refreshToken)
            });
        });
    });
})