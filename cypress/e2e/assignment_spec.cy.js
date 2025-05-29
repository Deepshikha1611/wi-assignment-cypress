describe('Work Instruction Assignment', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.xpath("//input[@name='email']").type('singh.deepshikha165@gmail.com');
    cy.xpath("//input[@name='password']").type('Workerbase1!');
    cy.xpath("//button[@type='submit']").click();
    cy.contains('Projects');
  });

  it('navigates to project', () => {
    cy.visit('/projects');
    cy.contains('QA Engineer Challenge').click();
    cy.contains('Tasks').click();
    cy.get('.Breadcrumb-module__chevronBottom___u7ZOE').trigger('mouseover');
    cy.contains('a', 'Rules').click({ force: true });
    cy.contains('span', 'Create Rule').click();
    cy.contains('span', 'Test Trigger').click();
    cy.get('input[name="name"]').type('Test Rule Automation');
    cy.contains('span', 'Continue').click();
    cy.contains('span', 'Continue').click();
    cy.contains('span', 'Workinstructions').click();
    cy.get('input#react-select-7-input').click().type('Test Work Instruction{enter}');
    cy.get('input[name="task-headline"]').type('Test Headline Automation');
    cy.get('input[name="task-title"]').type('Test Title Automation');
    cy.get('textarea[name="task-description"]').type('Test Description Automation');
    cy.get('input[name="task-priority"]').clear().type('1');
    cy.get('#react-select-3-input').type('Auto accept{enter}');
    cy.get('#react-select-12-input').type('close{enter}');
    cy.contains('label', 'User').click();
    cy.get('#react-select-13-input').type('Deepshikha Singh{enter}');
    cy.contains('span', 'Save').click();
    cy.contains('Rule created').should('be.visible');
    cy.get('.Breadcrumb-module__chevronBottom___u7ZOE').trigger('mouseover');
    cy.contains('a', 'Functions').click({ force: true });
    cy.get('div[data-tag="allowRowEvents"]').contains('Test Trigger').click();
    cy.contains('span', 'Edit').click();
    cy.get('a').filter((index, el) => el.textContent.trim() === 'Function').click();
    cy.contains('span', 'Run').click();
    cy.contains('Function run successful').should('be.visible');
  });

  it('navigates to client', () => {
    cy.visit('/client/login/email');

  });

});
