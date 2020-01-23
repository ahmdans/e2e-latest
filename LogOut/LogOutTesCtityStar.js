let login = require('../Login/identifyLoginElements');
let LogOut=require('./identifyLogOutElements');
let dashboard = require('../Dashboard/identifyDashboardElements');

describe('logout scenario ',function(){
    it('login ',function(){
        browser.get('http://localhost:5500/#/auth/login/2');
        login.userName.sendKeys("SuperAdmin");
        login.password.sendKeys("123456");
        login.loginBtn.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:5500/#/pages");
    })
    it('log out ',function(){
        dashboard.userProfile.click();
        browser.sleep();
        LogOut.logoutBtn.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:5500/#/auth/login/2");
    })
})