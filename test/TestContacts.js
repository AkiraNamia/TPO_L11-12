const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {ContactsHome} = require('D:/study/3/TPO/l11-12/pageobject_model/page/ContactsHome.js') 
 
 
const TestConacts = async () => { 
    
  const testConacts  = new ContactsHome('chrome'); 
  await testConacts.GetBr('https://markformelle.by/'); 
  await testConacts.OpenTable("/html/body/footer/div/div[1]/div[4]/div[2]/ul/li[3]/a"); 

  await testConacts.Finish();
}  
 
TestConacts();