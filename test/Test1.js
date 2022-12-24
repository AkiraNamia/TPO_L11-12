const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {Test1Page} = require('D:/study/3/TPO/l11-12/pageobject_model/page/Test1Page.js') 
 
 
const Test1 = async () => { 
    
  const test1Page  = new Test1Page('chrome'); 
  await test1Page.GetBr('https://markformelle.by/'); 
  await test1Page.OpenTable("/html/body/footer/div/div[1]/div[3]/div[2]/ul/li[10]/a"); 

  await test1Page.Finish();
}  
 
Test1();