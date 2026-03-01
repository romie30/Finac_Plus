class BookStorePage {
    constructor(page) {
        this.bookLink = page.locator("a[href='/books']");
        this.loginOption = page.locator("span:has-text('Login')");
        this.userNameInput = page.getByPlaceholder("UserName");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginButton = page.locator("#login");
        this.userNameValue = page.locator("#userName-value");
        this.logoutButton = page.locator("button:has-text('Logout')");
        this.logOutButton = page.locator("button:has-text('Log out')");
        this.gotoStoreButton = page.locator("#gotoStore");
        this.searchBox = page.locator("#searchBox");
        this.searchButton = page.locator("//input[@id='searchBox']/following-sibling::button");
        this.searchedBookLink = page.locator(".action-buttons > span > a");
        this.bookTitle = page.locator("#title-wrapper #userName-value");
        this.bookAuthor = page.locator("#author-wrapper #userName-value");
        this.bookPublisher = page.locator("#publisher-wrapper #userName-value");
    }
}

module.exports = { BookStorePage: BookStorePage };