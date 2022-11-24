import { Selector,t } from "testcafe";

class HomePage{

    constructor(){
        this.logoutBtn = Selector('a.button ');
        this.responseCard = Selector('div#flash');
    }

    async clickOnLogoutBtn(){
        await t
        .click(this.logoutBtn);
    }
}

export default new HomePage();