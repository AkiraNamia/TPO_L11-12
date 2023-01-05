const {PageBase} = require('D:/study/3/TPO/lab9/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {MySecondTestHome2} = require('D:/study/3/TPO/lab9/pageobject_model/page/MySecondTestHome2.js') 
 
 
const TestMyTest = async () => { 
    
  const myTestHome  = new MySecondTestHome2('chrome'); 
  await myTestHome.GetBr('https://markformelle.by/'); 
  await myTestHome.FindEl("/html/body/div[2]/div/div[3]/a"); 
  await myTestHome.FindCountry("/html/body/div[2]/div/div[1]/div/div[2]/div/div[1]/span",'/html/body/div[2]/div/div[1]/div/div[2]/div/div[1]/div/a[3]'); 

  await myTestHome.Finish();
}  
 
TestMyTest();