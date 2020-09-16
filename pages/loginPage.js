let basePage = require('./basePage');

let loginPage = function () {
    let loginModal = element(by.className('ModalBase-card'));
    let loginOption = element(by.id('login-with-apple'));

    this.waitForLoginOptions = function () {
        basePage.waitToBeVisible(loginModal);
    };

    this.scrollToLoginOption = function () {
        basePage.waitToBePresent(loginOption);
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView(true)', loginOption.getWebElement());
        });
    };

    this.loginOptionIsVisible = function () {
        return loginOption.isDisplayed();
    };
};

module.exports = new loginPage();
