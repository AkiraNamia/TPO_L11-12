const {PageBase} = require('D:/study/3/TPO/l11-12/pageobject_model/page/PageBase.js'); 
const {Builder, By, until} = require ('selenium-webdriver'); 
const {ShopsHome} = require('D:/study/3/TPO/l11-12/pageobject_model/page/ShopsHome.js') 
 
 
const TestShops = async () => { 
    
  const shopsHome  = new ShopsHome('chrome'); 
  await shopsHome.GetBr('https://markformelle.by/'); 
//   await shopsInMinskHome.Close("/html/body/div[1]/div/div[1]/div[1]/div/div"); 

  await shopsHome.EnterTxt("//*[@class='search-active-desc']", "Однотонные брюки клеш в темно-фиолетовом цвете"); 
  await shopsHome.AddToCart("//*[@id='bx_3966226736_506634_7e1b8e3524755c391129a9d7e6f2d206']/div[1]/div[1]/a", "//*[@id='mf-pr-table-atts']/div[1]/div/div[1]/div[1]","//*[@id='mf-pr-table-atts']/div[1]/div/div[2]/div/div[4]", "//*[@id='bx_117848907_506634_add_basket_link']"); 
  await shopsHome.CheckCart("//*[@id='bx_basketFKauiI']/a[5]"); 
  await shopsHome.Finish();
}  
 
TestShops();