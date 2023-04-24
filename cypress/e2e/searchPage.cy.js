/// <reference types="cypress" />

describe('Search page', () => {
    beforeEach(() => {
        // capture all requests that start with http
        cy.intercept('GET', 'https://raw.githubusercontent.com/Gem5Vision/json-to-mongodb/simentic-version/kiwi.json').as('kiwi')
        cy.intercept('GET', '/resources.json').as('resources')
        cy.intercept('POST', 'https://data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate').as('mongo')
        cy.intercept('POST', "https://realm.mongodb.com/api/client/v2.0/app/data-ejhjf/auth/providers/api-key/login").as('login')
        cy.visit('/resources')
        cy.wait(['@kiwi', '@resources', '@mongo', '@login'])
        cy.wait(['@kiwi', '@resources', '@mongo', '@login'])
        window.localStorage.setItem('CookieConsent', "{\"userPreference\":\"all\"}")
    })

    it('checks if exact search works', () => {
        cy.get('.search-form').find('input').type('riscv-ubuntu-20.04-boot{enter}')
        cy.wait(['@kiwi', '@resources', '@mongo'])
        cy.url().should('include', '/resources')
        cy.url().should('include', '?q=riscv-ubuntu-20.04-boot')
        cy.get(':nth-child(1) > .search-result > a > .search-result__title > [aria-label="Resource ID"]').should('have.text', 'riscv-ubuntu-20.04-boot')
    })

    it('checks if category filter works', () => {
        cy.get(':nth-child(1) > .accordion-header > .accordion-button').click()
        cy.get('#diskimage').click()
        cy.wait(['@kiwi', '@resources', '@mongo'])
        // check if each search result has the category
        cy.get('.search-result').each(($el) => {
            cy.wrap($el).find('a > .gap-3 > :nth-child(2) > .text-capitalize').should('contain.text', 'diskimage')
        })
        cy.get('.search-form').find('input').should('have.value', 'category:diskimage ')
    })

    it('checks if filter query changes the checkbox', () => {
        cy.get('.search-form').find('input').type('architecture:RISCV{enter}')
        cy.wait(['@kiwi', '@resources', '@mongo'])
        cy.get(':nth-child(2) > .accordion-header > .accordion-button').click()
        cy.get('#RISCV').should('be.checked')
        cy.get('.search-result').each(($el) => {
            cy.wrap($el).find('a > .gap-3 > .align-items-center > p').should('contain.text', 'RISCV')
        })
    })
})