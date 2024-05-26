const randomIndex = Math.floor(Math.random() * 4);

describe('template', ()=>{
    it('render', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('.App').should('exist')
        cy.get('.Questions').should('exist')
        cy.get('.Questions').contains('Вопрос №1').should('exist');
        for(let i = 0; i < 10; i++){
            cy.get('input[type="radio"]').then($radios => {
                const numRadios = $radios.length;
            
                const randomIndex = Math.floor(Math.random() * numRadios);
            
                cy.wrap($radios[randomIndex]).check();
                cy.get('#styledButton').should('exist').click();
            });
        }
        cy.get('.custom-width').contains('All questions: 10').should('exist');
        
    })
})