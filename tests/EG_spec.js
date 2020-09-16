let homePage = require('../pages/homePage');
let contentPage = require('../pages/contentPage');
let loginPage = require('../pages/loginPage');
let basePage = require('../pages/basePage');

describe('EpicGames test', function () {

    beforeEach(function () {
        // Открыть страницу: https://www.epicgames.com/store/ru/
        basePage.get('/store/ru/');
    });

    it('Task_1', function () {
        let warningText = 'Игра содержит материалы, предназначенные для людей старше 18 лет';
        // Ввести в поле “Поиск” текст “Red”
        homePage.searchItem('Red');
        homePage.waitSearchToBeCompleted();

        // Появились предлагаемые поисковые результаты
        expect(homePage.numOfSearchResults()).toEqual(4)
        homePage.clearResults();
        expect(homePage.numOfSearchResults()).toEqual(0);

        // Снова ввести в поле “Поиск” текст “Red”
        homePage.searchItem('Red');
        homePage.clickOnSearchItem();

        // Открылась страница с возраcтным ограничением
        homePage.waitWarningToBeVisible();
        expect(homePage.contentWarningText()).toEqual(warningText);

        // Убедиться, что выпадашка исчезла из DOM страницы
        expect(homePage.resultsListIsPresent()).toBeFalsy();

        // В окне возрастного ограничения нажать на “Продолжить”
        homePage.goToContentPage();

        // Убедиться, что это окно стало невидимым (исчезло с экрана)
        expect(homePage.warningIsVisible()).toBeFalsy();
        contentPage.scrollToGameVersion();

        // Нажать на “Добавить в список желаемого” напротив версии “Red Dead Redemption 2: Special Edition”
        contentPage.addGameToWish();
        loginPage.waitForLoginOptions();
        loginPage.scrollToLoginOption();

        // Убедиться, что открылась форма авторизации с возможностью логина с помощью Apple ID
        expect(loginPage.loginOptionIsVisible()).toBeTruthy();
    });

    afterEach(function () {
        // Закрыть браузер
        basePage.closeBrowser();
    });
});
