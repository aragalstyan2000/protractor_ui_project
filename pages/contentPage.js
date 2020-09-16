let basePage = require('./basePage');

let contentPage = function () {
    let versionElement = element(by.cssContainingText('[href*= "special-edition"] div[class*="title_"]', 'Red Dead Redemption 2:  Special Edition'));
    let addToWishElement = element(by.css('[href*= "special-edition"] [data-component="WishButton"]'));

    this.scrollToGameVersion = function () {
        basePage.waitToBePresent(versionElement);
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView(true)', versionElement.getWebElement());
        });
    };

    this.addGameToWish = function () {
        basePage.waitToBeVisible(addToWishElement);
        addToWishElement.click();
    };
};

module.exports = new contentPage();
