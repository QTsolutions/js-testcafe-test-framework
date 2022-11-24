import { ClientFunction } from "testcafe";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import testData from "../../testdata.json";
import config from "../../config.json";

const getUrl = ClientFunction(() => window.location.href);

fixture('Home Page')
.page(config.loginUrl)
.beforeEach(async t => {

    loginPage.setUserName(testData.userName);
    loginPage.setPassword(testData.password);
    loginPage.clickOnLoginBtn();

    await t.wait(5000);

});

test('Loading Home Page', async t => {

    await t
    .expect(getUrl()).contains(config.homeUrl)
    .expect(homePage.logoutBtn.exists).ok();

});

test('Successfully Logout', async t => {

    homePage.clickOnLogoutBtn();
    await t
    .wait(5000)
    .expect(loginPage.responseCard.innerText).contains('You logged out of the secure area');

});
