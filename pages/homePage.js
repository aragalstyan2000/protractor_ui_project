let basePage = require('./basePage');

let homePage = function () {
    let searchBox = browser.element(by.css('[data-testid="search-bar"]'));
    let visibleResults = $$('[data-component="ResultListItem"]').filter(function(link) {
        return link.isDisplayed();
    });
    let clearButton = browser.element(by.css('[data-testid="search-bar"] ~ button'));
    let resultElement = element(by.cssContainingText('[data-component="ResultListItem"]', 'Red Dead Redemption 2'));
    let warningPage = element(by.css('[data-component="WarningTemplate"]'));
    let warningTextArea = element(by.css('[data-component="WarningTemplate"] p'));
    let nextButton = browser.element(by.css('[data-component="WarningTemplate"] button'));
    let dropdown = element(by.id('search-bar-autocomplete'));

    this.searchItem = function (string) {
        basePage.waitToBeVisible(searchBox);
        searchBox.sendKeys(string);
    };

    this.waitSearchToBeCompleted = function () {
        basePage.waitToBePresent(visibleResults);
    };

    this.numOfSearchResults = function () {
        return visibleResults.count();
    };

    this.clearResults = function () {
        basePage.waitToBeVisible(clearButton);
        clearButton.click();
    };

    this.clearResults = function () {
        basePage.waitToBeVisible(clearButton)
        clearButton.click();
    };

    this.clickOnSearchItem = function () {
        basePage.waitToBeVisible(resultElement);
        resultElement.click();
    };

    this.waitWarningToBeVisible = function () {
        basePage.waitToBeVisible(warningPage);
    };

    this.contentWarningText = function () {
        return warningTextArea.getText();
    };

    this.goToContentPage = function () {
        basePage.waitToBeVisible(nextButton);
        nextButton.click();
    };

    this.resultsListIsPresent = function () {
        return dropdown.isPresent();
    };

    this.warningIsVisible = function () {
        return warningPage.isPresent();
    };
};

module.exports = new homePage();
