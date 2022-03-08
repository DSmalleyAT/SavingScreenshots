const DynaLoadPage = require('../pageobjects/dynamic_loading.page');

describe('My dynamic loading application', () => {
    it('should click a start button to dynamically load an after-the-fact-rendered element', async () => {
        //Step 1, Open Page
        await DynaLoadPage.open();
        await browser.saveScreenshot('./screenshots/1Initialpage.png');

        //Step 2, Click and Loading Bar
        await (DynaLoadPage.StartButton).click();
        await browser.pause(1000); 
        await browser.saveScreenshot('./screenshots/2Loading.png');
        
        //Step 3, Load and Display the Message
        await (DynaLoadPage.HelloWorld).waitForDisplayed ({timeout: 10000});
        await browser.saveScreenshot('./screenshots/3TestComplete.png');
    });
});