const MainPage = require("./Main.page")

export default new class MissionControlPage extends MainPage{
    elements = {
    topicText: () => cy.get('div>h1'),

    whyTelnyxButton: () => cy.get('button>div>span').contains('Why Telnyx'),

    missionControlButton: () => cy.get('[href="/mission-control"]>span'),
    
    industryLeadingLincButton: () => cy.get('header>p>a'),
    }
    clickWhyTelnyxButton() {
        this.elements.whyTelnyxButton().click();
    }
    scrollToIndustryLeadingLincButton() {
        this.elements.industryLeadingLincButton().scrollIntoView()
    }
    clickMissionControlButton() {
        this.elements.missionControlButton().click();
    }
    checkIndustryLeadingLincButtonClickability() {
        this.elements.industryLeadingLincButton().should('have.attr','href')
    }
    checkTopicTextMaching(text) {
        this.elements.topicText().should('have.text', text)
    }
    clickIndustryLeadingLincButton() {
        this.elements.industryLeadingLincButton().click({force: true})
    }
}