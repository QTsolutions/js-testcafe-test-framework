import { ClientFunction } from "testcafe";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import testData from "../../testdata.json";
import config from "../../config.json";

const getUrl = ClientFunction(()=> window.location.href);

fixture('Login Page')
.page(config.loginUrl)

test('Loading Login Page',async t =>{
    await t
    .expect(getUrl()).contains(config.loginUrl)
    .expect(loginPage.loginBtn.exists).ok();
});

test('Form -successfully login',async t =>{
    
    loginPage.setUserName(testData.userName);
    loginPage.setPassword(testData.password);
    loginPage.clickOnLoginBtn();

    await t 
    .expect(homePage.responseCard.innerText).contains('You logged into a secure area');

});

test('Form -invalid login',async t =>{
    
    loginPage.setUserName(testData.invalidName);
    loginPage.setPassword(testData.password);
    loginPage.clickOnLoginBtn();

    await t 
    .expect(homePage.responseCard.innerText).contains('Your username is invalid');
      
});

test('Form -invalid password',async t =>{
    
    loginPage.setUserName(testData.userName);
    loginPage.setPassword(testData.invalidPassword);
    loginPage.clickOnLoginBtn();

    await t 
    .expect(homePage.responseCard.innerText).contains('Your password is invalid');
      
});

