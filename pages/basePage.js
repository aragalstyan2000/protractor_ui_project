let homePage = function () {
    let EC = protractor.ExpectedConditions;

    this.get = function (url) {
        browser.ignoreSynchronization = true;
        browser.get(url);
    };

    this.closeBrowser = function () {
        browser.quit();

    };

    this.waitToBeVisible = function (element) {
        return browser.wait(EC.visibilityOf(element), 10000);
    };

    this.waitToBePresent = function (element) {
        return browser.wait(EC.presenceOf(element), 10000);
    };
};

module.exports = new homePage();
