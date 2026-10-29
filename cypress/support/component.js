import { mount } from '@cypress/react';
import '@pixsame/cypress-plugin-visual-regression-diff';
import '../../src/index.css';

Cypress.Commands.add('mount', mount);
