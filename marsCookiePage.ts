import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs'); 

export class CookieClass extends BasePage {
    engBtn: By = By.id('langSelect-EN'); 
    cookieBtn: By = By.id('bigCookie'); 
    xBtn: By = By.xpath('//a[text()="twitter"]'); 

    constructor() {
        super({url: "https://orteil.dashnet.org/cookieclicker/"});
    }; 

    async repeat(clickAmount, clickThing) {
        for(let i = 0; i < clickAmount; i++){
            await this.click(clickThing); 
        }; 
    }; 

    async tabs(){
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        fs.writeFile(`${__dirname}/xPicture.png`,
        await this.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.log(e);
            else console.log("A picture is worth a thousand words"); 
        }); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]);
    }
}