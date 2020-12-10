/// <reference types = "cypress"/>
describe( '<NuevaCuenta />', () => {
    it('<NuevaCuenta /> - Validación y alertas y Crear nueva cuenta', () => {
        cy.visit('/nueva-cuenta');

        cy.get('[data-cy = submit-nueva-cuenta]')
            .click();

        cy.get('[data-cy = alerta')
            .should('exist')
            .invoke('text')
            .should('equal', 'Todos los campos son obligatorios');
        
        cy.get('[data-cy = alerta]')
            .should('have.class', 'alerta-error');
        
        //Llenado de formularios
        cy.get('[data-cy = nombre-input]')
            .type('Oscar');
        
        cy.get('[data-cy = email-input]')
            .type('oscar@oscar.com');
        
        cy.get('[data-cy = password-input]')
            .type('12345');
        
        cy.get('[data-cy = repetir-password-input]')
            .type('12345');

        cy.get('[data-cy = submit-nueva-cuenta]')
            .click();
        
        cy.get('[data-cy = alerta')
            .should('exist')
            .invoke('text')
            .should('equal', 'El password debe ser de al menos 6 caracteres');
        
        cy.get('[data-cy = alerta]')
            .should('have.class', 'alerta-error');

        cy.get('[data-cy = password-input]')
            .clear()
            .type('123456');

        cy.get('[data-cy = repetir-password-input]')
            .clear()
            .type('12345');
        
        cy.get('[data-cy = submit-nueva-cuenta]')
            .click();
        
        cy.get('[data-cy = alerta')
            .should('exist')
            .invoke('text')
            .should('equal', 'Los passwords no son iguales');
        
        cy.get('[data-cy = alerta]')
            .should('have.class', 'alerta-error');
        
        cy.get('[data-cy = repetir-password-input]')
            .clear()
            .type('123456');
        
        cy.get('[data-cy = submit-nueva-cuenta]')
            .click();

        cy.get('[data-cy = selecciona]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Selecciona un proyecto');
        
        cy.get('[data-cy = cerrar-sesion]')
            .click();
    });

    it('<NuevaCuenta /> - Revisar usuarios duplicados', () => {
        cy.visit('/nueva-cuenta');

        cy.get('[data-cy = nombre-input]')
            .type('Oscar');
        
        cy.get('[data-cy = email-input]')
            .type('oscar@oscar.com');
        
        cy.get('[data-cy = password-input]')
            .type('123456');
        
        cy.get('[data-cy = repetir-password-input]')
            .type('123456');
        
        cy.get('[data-cy = submit-nueva-cuenta]')
            .click();
        
        cy.get('[data-cy = alerta')
            .should('exist')
            .invoke('text')
            .should('equal', 'El usuario ya existe');
        
        cy.get('[data-cy = alerta]')
            .should('have.class', 'alerta-error');
    })
});