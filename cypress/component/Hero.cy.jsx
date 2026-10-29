import Hero from '../../src/components/Hero';
import { LanguageProvider } from '../../src/i18n/LanguageContext';

const visualSnapshotOptions = {
  createMissingImages: Cypress.expose('UPDATE_VISUAL_SNAPSHOTS') === true,
  updateImages: Cypress.expose('UPDATE_VISUAL_SNAPSHOTS') === true,
  maxDiffThreshold: 0,
};

describe('SEO hero content', () => {
  it('shows the primary keyword and internal conversion links', () => {
    cy.mount(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>,
    );

    cy.get('h1')
      .should('contain.text', 'Personalized Fitness & Nutrition Plans')
      .should('be.visible');
    cy.get('img').should(($image) => {
      expect($image[0].naturalWidth).to.be.greaterThan(0);
    });
    cy.document().its('fonts.status').should('eq', 'loaded');
    cy.get('a[href="#results"]').should('be.visible');
    cy.get('a[href="#contact"]').first().should('be.visible');
    cy.get('h1').matchImage(visualSnapshotOptions);
  });
});
