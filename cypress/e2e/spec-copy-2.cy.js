describe('My First Test', () => {
  it('clicking "Begin Learning" navigates to a new url', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Begin Learning').click()
    cy.url().should('include', '/quizPage')
  })
  it('clicking "Account" navigates to a new url', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Account').click()
      cy.url().should('include', '/Account')
    })
    it('clicking "Quiz" navigates to a new url', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Quiz').click()
      cy.url().should('include', 'QuizPage')
    })
    it('clicking "Account" navigates to a new url', () => {
      cy.visit('http://localhost:3000/QuizPage')
      cy.contains('Account').click()
      cy.url().should('include', '/Account')
    })
})