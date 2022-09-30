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
  
  
    it('it requires email and optional username',  () => {
      cy.get('form').within(($form) => {
      cy.get('input[type="email"]').type('vobexa6247@offsala.com')
     // cy.get('input[type="text"]').type('John Doe')          Comment this out to test when username is provided
      cy.contains('Login').should('be.visible').click()
      })
      cy.location('protocol').should('eq', 'https:')
   })
  
  
  
  it('Can have private chat with a friend , Waga', () => {
    cy.get('.cursor-pointer > div > .bg-orange-900', {timeout:10000}).click()
    cy.get('.flex-col > .sidebar-search > .p-input-icon-left > .p-inputtext').type('Waga')
   // cy.get('.flex-col > .sidebar-search > .p-input-icon-left > .p-inputtext').type('Astro')
    cy.get('.mb-1 > .relative').click()
    cy.get('.send-input').type('Hi Waga. I am Testing your app').should('be.visible')
    cy.get('.send > .bg-orange-900').click()
  })


 //it('Can upload a file and send to a friend , Waga', () => {
 //  cy.get('.items-center > .max-h-64 > .justify-center > #raised-button-file').click()
   // cy.get('.text-xl .text-white').click()
   // cy.get('.break-words').click()
   // cy.get('.text-white').click()

 //  })

 // it('Can record a message and send to friend , Nicho', () => {
   // cy.get(':nth-child(2) > .bg-gray-500 > svg > path').invoke('show').click()
 // cy.get(':nth-child(2) > .bg-gray-500 > svg ').should('be.visible').click()
 // cy.get('.hidden').invoke('show').click()
    
 // })
 /* it('Can record a message and send to friend , Nicho', () => {
    
  })

  
    it('Can select imoji and send to friend , Nicho', () => {
    cy.get('#emoji-icon > svg').click()
  })
  
  */

  
 it('Can Create a Group and chat interactively ', () => {
  
})

it('User can leave a Group chat ', () => {
  
})

it('User can leave a Group chat ', () => {
  
})

it('User can upload fies and share privately or in a group chat ', () => {
  
})

it('User can Voice/Audio record chat ', () => {
  
})


it('Ucer can edit or update his/her profile' , () => {
  
})


it(' Can search for friends and groups' , () => {
  
})


  })
  
  

  