const fs = require('fs');
const {expect} = require("@playwright/test");

class BookStoreService {
    constructor(page, bookStorePage) {
        this.page = page;
        this.bookStorePage = bookStorePage;
    }

    async navigateToBookStore(url) {
        await this.page.goto(url);
        await this.bookStorePage.bookLink.click();
        console.log("Book Store Link clicked");
    }

    async captureScreenshot(stepName) {
        await this.page.screenshot({ path: `screenshots/${stepName} Screenshot.png` });
    }

    async navigateToLogin() {
        await this.bookStorePage.loginOption.click();
        await this.captureScreenshot("Login Menu Button clicking");
    }

    async performLogin(username, password) {
        const userNameInput = await this.bookStorePage.userNameInput;
        await userNameInput.click();
        await userNameInput.fill(username);
        const passwordInput = this.bookStorePage.passwordInput;
        await passwordInput.click();
        await passwordInput.fill(password);
        await this.captureScreenshot("Username and Password entering");
        const loginButton = this.bookStorePage.loginButton;
        await loginButton.click();
    }

    async searchForBook(bookTitle) {
        await this.bookStorePage.gotoStoreButton.click();
        await this.captureScreenshot("Book Store button clicking");
        await this.bookStorePage.searchBox.click();
        await this.bookStorePage.searchBox.fill(bookTitle);
        await this.captureScreenshot("Searching for the book");
        console.log(`Searched for book: ${bookTitle}`);
        await this.bookStorePage.searchButton.click();
    }

    async openSearchedBook() {
        await this.bookStorePage.searchedBookLink.click();
    }

    async saveBookDetailsToFile(fileName = "bookDetails.json") {
        const bookDetails = {
            title: await this.bookStorePage.bookTitle.innerText(),
            author: await this.bookStorePage.bookAuthor.innerText(),
            publisher: await this.bookStorePage.bookPublisher.innerText(),
        };
        const jsonFile = JSON.stringify(bookDetails, null, 2);
        fs.writeFileSync(fileName, jsonFile);
        await this.captureScreenshot("Details of the Book");
        console.log(`Book details saved to ${fileName}`);
    }

    async performLogout() {
        await this.bookStorePage.logOutButton.click();
        console.log("Logout Button clicked");
    }
}

module.exports = { BookStoreService: BookStoreService };