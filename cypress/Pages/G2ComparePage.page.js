class G2ComparePage {
    elements = {
    talkToAnExpertButton : () =>  cy.get('div>a[href="https://telnyx.com/contact-us"]').first()
    }
    clickTalkToAnExpertButton() {
        this.elements.talkToAnExpertButton().click({force: true})
    }
}
module.exports = new G2ComparePage()