import { CookieClass } from "./marsCookiePage";
const mars = new CookieClass(); 

test("Can click on the cookie and go to the artist formally known as twitter",async () => {
    await mars.navigate(); 
    await mars.driver.manage().window().maximize(); 
    await mars.click(mars.engBtn); 
    await mars.driver.sleep(1000); 
    await mars.click(mars.cookieBtn); 
    await mars.repeat(1000, mars.cookieBtn); 
    await mars.click(mars.xBtn); 
    await mars.tabs(); 
    await mars.driver.quit()
})