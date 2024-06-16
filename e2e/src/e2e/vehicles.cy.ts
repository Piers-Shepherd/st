import { getGreeting } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => {
    // @todo Abstract interceptors to make them reusable, scalable etc.
    cy.intercept(
      'GET',
      'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles',
      { fixture: 'vehicles.json' }
    );
    cy.intercept(
      'GET',
      'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xe',
      { fixture: 'vehicle.xe.json' }
    );
    cy.intercept(
      'GET',
      'https://frontend-code-test-api-jhbwml7vva-nw.a.run.app/api/vehicles/xf',
      { fixture: 'vehicle.xf.json' }
    );
    cy.visit('/');
  });

  it('should display vehicles', () => {
    cy.get('[data-e2e="vehicles"] [data-e2e="vehicle"]').should(
      'have.length',
      2
    );
    cy.get('[data-e2e="vehicles"] [data-e2e="vehicle"]')
      .eq(0)
      .within(() => {
        cy.get('[data-e2e="title"]').should('contain.text', 'JAGUAR XE');
        cy.get('[data-e2e="price"]').should('contain.text', 'from £30,000');
        cy.get('[data-e2e="description"]').should(
          'contain.text',
          'The most advanced, efficient and refined sports saloon that Jaguar has ever produced'
        );
      });

    cy.get('[data-e2e="vehicles"] [data-e2e="vehicle"]')
      .eq(1)
      .within(() => {
        cy.get('[data-e2e="title"]').should('contain.text', 'JAGUAR XF');
        cy.get('[data-e2e="price"]').should('not.exist');
        cy.get('[data-e2e="description"]').should(
          'contain.text',
          'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.'
        );
      });
  });
});
