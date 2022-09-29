describe('Chatting aplication', () => {
    it('Setup and portviews', () => {
      cy.visit('https://amachat.herokuapp.com/')
    // cy.viewport('320, 568')
      cy.wait(200)
      cy.viewport('macbook-15')
      cy.wait(200)
      cy.viewport('macbook-13')
      cy.wait(200)
      cy.viewport('macbook-11')
      cy.wait(200)
      cy.viewport('ipad-2')
      cy.wait(200)
      cy.viewport('ipad-mini')
      cy.wait(200)
      cy.viewport('iphone-6+')
      cy.wait(200)
      cy.viewport('iphone-6')
      cy.wait(200)
      cy.viewport('iphone-5')
      cy.wait(200)
      cy.viewport('iphone-4')
      cy.wait(200)
      cy.viewport('iphone-3')
      cy.wait(200)
    })
  
  
    it('it requires email',  () => {
      cy.get('form').within(($form) => {
      cy.get('input[type="email"]').type('vobexa6247@offsala.com ')
      cy.get('input[type="text"]').type('vobexa6247@offsala.com ')
      cy.contains('Login').should('be.visible').click()
      })
      cy.location('protocol').should('eq', 'https:')
   })
  
  
  it('Can chat with a friend', () => {
   cy.get('.p-button > .bg-orange-900').click()
   
  //  cy.get('.flex-col > .sidebar-search > .p-input-icon-left > .p-inputtext').type('Astro')
  //cy.get('.mb-1 > :nth-child(2)').click()
  //cy.get('.input').type('Hi Nick!')
  //cy.get('.send > .bg-orange-900').click()
  //cy.get('.message.bg-stone-300.px-2.py-1.rounded-md.max-w-xs.break-all').contains('Hi Mr Ashong')
   
  })
  
  })
  