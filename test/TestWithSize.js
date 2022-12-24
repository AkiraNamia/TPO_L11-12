const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {WithSizeHome} = require('D:/study/3/TPO/l11-12/pageobject_model/page/WithSizeHome.js') 
 
 
const TestWithSize = async () => { 
    
  const testWithSize  = new WithSizeHome('chrome'); 
  await testWithSize.GetBr('https://markformelle.by/'); 
  await testWithSize.EnterTxt("//*[@class='search-active-desc']", "Однотонные брюки клеш в темно-фиолетовом цвете"); 
  await testWithSize.AddToCart("//*[@class='catalog-button js-btn-to-fav js-btn-to-fav--cat upper']"); 
  await testWithSize.CheckCart("//*[@id='ico-favorites']"); 
  await testWithSize.Finish();
}  
 
TestWithSize();