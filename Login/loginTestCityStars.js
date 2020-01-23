let login=require('./identifyLoginElements');
describe('city star login',function(){
    beforeEach(function(){
        browser.get('http://localhost:5500/#/auth/login/2');
    });
    it('with valid user name and password',function(){
        login.userName.sendKeys("SuperAdmin");
        login.password.sendKeys("1235456");
        login.loginBtn.click();
        expect(browser.getCurrentUrl()).toEqual("http://localhost:5500/#/pages");
    });
    it('with valid user name and invalid password ',function(){
        login.userName.sendKeys("SuperAdmin");
        login.password.sendKeys("123445656");
        login.loginBtn.click();
        browser.sleep(5*1000);
        expect(login.modalAlert.getText()).toEqual("The user name or password is incorrect.");
    });
    // it('with invalid user name and valid password ', function(){
    //     login.userName.sendKeys("SuperAdasfdmin");
    //     login.password.sendKeys("123456");
    //     login.loginBtn.click();
    //     browser.sleep(5*1000);
    //     expect(login.modalAlert.getText()).toEqual("The user name or password is incorrect.");
    // });
})