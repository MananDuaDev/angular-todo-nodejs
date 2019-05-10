describe('todoList Test', function() {
    it('opens todolist', function() {
        cy.visit('http://127.0.0.1:8080/');
        cy.get('todoinput').type('text');
    
    })
})