const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until, Key} = require ('selenium-webdriver'); 
 
class Test1Page extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
    await this.driver.manage().window().maximize();
  await this.driver.get(path);
 }
 async OpenTable(id){
  await this.driver.findElement(By.xpath(id)).sendKeys(Key.RETURN);
}

async Finish()
{
  await this.driver.sleep(5000);
  await this.driver.quit();
}
} 
 
module.exports.Test1Page = Test1Page;
