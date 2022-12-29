const {PageBase} = require('D:/study/3/TPO/lab9/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {MySecondTestHome} = require('D:/study/3/TPO/lab9/pageobject_model/page/MySecondTestHome.js') 
 
 
const TestMyTest = async () => { 
    
  const myTestHome  = new MySecondTestHome('chrome'); 
  await myTestHome.GetBr('https://markformelle.by/'); 
  await myTestHome.FindEl("//*[@class='header-location']"); 
  await myTestHome.FindEl("/html/body/section/div/div[1]/ul/li[2]"); 

  // await myTestHome.FindCountry("//*[@id='catalog-menu-list']/li[1]/a",'//*[@id="catalog-menu-list"]/li[1]/ul/li[1]/a'); 

  // await myTestHome.FindCountry2("//*[@id='comp_112424704fc22d4a47377995a93a573a']/form/div/div[1]/ul/li[3]/div",'//*[@id="comp_112424704fc22d4a47377995a93a573a"]/form/div/div[1]/ul/li[3]/div/div[2]/ul/li[2]/div'); 

  await myTestHome.Finish();
}  
 
TestMyTest();