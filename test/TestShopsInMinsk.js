const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {ShopsInMinskHome} = require('D:/study/3/TPO/l11-12/pageobject_model/page/ShopsInMinskHome.js') 
 
 
const TestShopsInMinsk = async () => { 
    
  const shopsInMinskHome  = new ShopsInMinskHome('chrome'); 
  await shopsInMinskHome.GetBr('https://markformelle.by/'); 
//   await shopsInMinskHome.Close("/html/body/div[1]/div/div[1]/div[1]/div/div"); 

  await shopsInMinskHome.EnterTxt("//*[@class='search-active-desc']", "Однотонные брюки клеш в темно-фиолетовом цвете"); 
  await shopsInMinskHome.AddToCart("//*[@id='bx_3966226736_506634_7e1b8e3524755c391129a9d7e6f2d206']/div[1]/div[1]/a", "//*[@id='bx_117848907_506634_add_basket_link']"); 
  await shopsInMinskHome.CheckCart("//*[@id='bx_basketFKauiI']/a[5]"); 
  await shopsInMinskHome.Finish();
}  
 
TestShopsInMinsk();