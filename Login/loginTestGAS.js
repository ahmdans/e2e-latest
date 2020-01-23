let login = require('./identifyLoginElements');
describe('login scenario',function(){
    beforeEach(function(){
        browser.get("http://localhost:4010/#/auth/login/2");
        

    });
    // it('return local storage settings ', ()=>{
    //     browser.get("http://localhost:4010/#/auth/login/2")
    //     var settings = browser.executeScript("return  (window.localStorage.getItem('generalSettings'));");
    //     var settingToJson =JSON.stringify(settings);
    //     console.log(settingToJson);
    //     console.log(settings);
    // });
    
    it('login with valid data as a superAdmin ',function(){
        login.sectorelement.click();
        login.sectoreoption.get(0).click();
        login.generalRegion.click();
        login.generalRegionoption.get(0).click();
        login.sub_region.click();
        login.sub_regionoption.get(0).click();
        login.userName.click();
        login.userNameOption.get(20).click();
        login.vendinstation.click();
        login.vendinstationoption.get(0).click();
        login.password.sendKeys('123456');
        login.loginBtn.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4010/#/pages/dashboard');
    });
   it('login with invalid password as a super admin ',function(){
    login.sectorelement.click();
    login.sectoreoption.get(0).click();
    login.generalRegion.click();
    login.generalRegionoption.get(0).click();
    login.sub_region.click();
    login.sub_regionoption.get(0).click();
    login.userName.click();
    login.userNameOption.get(20).click();
    login.vendinstation.click();
    login.vendinstationoption.get(0).click();
    login.password.sendKeys('123454156');
    login.loginBtn.click();
    expect(login.modalAlert.getText()).toContain("يوجد خطأ فى إسم المستخدم أو كلمة السر");
    });
    // it('login with Alex user',function(){
    
    // });  
});