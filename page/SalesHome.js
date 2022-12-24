const {PageBase} = require('./PageBase.js'); 
const {Builder, By, until, Key} = require ('selenium-webdriver'); 
 
class SalesHome extends PageBase{ 
    constructor(browser){ 
        super(browser); 
    } 
 async GetBr(path){
    await this.driver.manage().window().maximize();
  await this.driver.get(path);
 }
 async EnterTxt(id, text){
    await this.driver.findElement(By.xpath(id)).sendKeys(text, Key.RETURN);
  }
  async AddToCart(id,ad){
    await this.driver.findElement(By.xpath(id)).sendKeys(Key.RETURN);
    await this.driver.findElement(By.xpath(ad)).sendKeys(Key.RETURN);

  }
  async CheckCart(id){
    await this.driver.findElement(By.xpath(id)).sendKeys(Key.RETURN);

  }
  

async Finish()
{
  await this.driver.sleep(5000);
  await this.driver.quit();
}
} 
 
module.exports.SalesHome = SalesHome;
