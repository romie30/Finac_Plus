import {test, expect} from "@playwright/test";
const {BookStorePage} = require("../main/pages/BookStorePage");
const {BookStoreService} = require("../main/services/BookStoreService");
const {UI_TEST_CONFIG} = require("../main/utils/constants");

test("UI Task for Finac Plus", async({page}) => {
    const bookStorePage = new BookStorePage(page);
    const bookStoreService = new BookStoreService(page, bookStorePage);
    await bookStoreService.navigateToBookStore(UI_TEST_CONFIG.BASE_URL);
    await bookStoreService.navigateToLogin();
    await bookStoreService.performLogin(UI_TEST_CONFIG.USERNAME, UI_TEST_CONFIG.PASSWORD);
    await expect(bookStorePage.userNameValue).toHaveText(UI_TEST_CONFIG.USERNAME);
    console.log("Validated: User Name matches input.");
    await expect(bookStorePage.logoutButton).toHaveText("Logout");
    await expect(bookStorePage.logoutButton).toBeEnabled(true);
    console.log("Validated: Logout Button is present and enabled.");
    await bookStoreService.searchForBook(UI_TEST_CONFIG.BOOK_TITLE);
    await expect(bookStorePage.searchedBookLink).toHaveText(UI_TEST_CONFIG.BOOK_TITLE);
    console.log("Validated: Searched Book is Present in results.");
    await bookStoreService.openSearchedBook();
    await bookStoreService.saveBookDetailsToFile();
    await expect(bookStorePage.logOutButton).toBeEnabled();
    await bookStoreService.performLogout();
})