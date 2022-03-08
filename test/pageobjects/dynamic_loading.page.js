

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynaLoadPage extends Page {
    /**
     * define selectors using getter methods
     */
    get StartButton() {
        return $('<button />');
    }

    get HelloWorld() {
        return $('h4*=Hello');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new DynaLoadPage();
