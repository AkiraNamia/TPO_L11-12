const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {SalesHome} = require('D:/study/3/TPO/l11-12/pageobject_model/page/SalesHome.js') 
 
 
const TestSales = async () => { 
    
  const testSales  = new SalesHome('chrome'); 
  await testSales.GetBr('https://markformelle.by/'); 
  await testSales.EnterTxt("//*[@class='search-active-desc']", "Однотонные брюки клеш в темно-фиолетовом цвете"); 
  await testSales.AddToCart("//*[@class='catalog-button js-btn-to-fav js-btn-to-fav--cat upper']", "//*[@class='header-cart btn-ico-basket']"); 
  await testSales.Finish();
}  
 
TestSales();