describe('Todo Test App', function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:8080/');
    })

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('todo list');
    })

    it('should add a todo', function() {
        element(by.model('todoInput')).sendKeys('Add');
        element(by.)
    })
})