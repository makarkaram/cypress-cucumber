class CoockiesPage{
    elements = {
    submitButton : () => cy.get('[id="radix-:r0:"]>div>button:first-of-type')
    } 
    acceptCookies() {
        this.elements.submitButton().click({force: true})
    }
}

module.exports = new CoockiesPage()