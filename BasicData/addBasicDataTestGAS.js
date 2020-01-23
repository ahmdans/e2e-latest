let dashboard=require('../Dashboard/identifyDashboardElements');
let AddGeneralRegion = require('../BasicData/identifyGeneralRegionElements');
let login=require('../Login/identifyLoginElements');
let AddsubRegion=require('../BasicData/identifySub-RegionElements')
var faker = require('../node_modules/Faker/Faker');

describe('add Basic Data  ',function(){
   
    var reg_name = faker.Name.lastName();
    var reg_code = faker.Helpers.replaceSymbolWithNumber('####');
    var sub_region_name = faker.Name.lastName();
    var Sub_region_code=faker.Helpers.replaceSymbolWithNumber('####');

    it('login as a super admin ',function(){
        browser.get("http://localhost:4010/#/auth/login/2");
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
    it('add sub region ',function(){
        dashboard.BasicData.click();
        browser.sleep(100);
        AddsubRegion.sub_region.click();
        AddsubRegion.Add_subBtn.click();
        AddsubRegion.sub_regionName.sendKeys(sub_region_name);
        AddsubRegion.gen_reg.click();
        AddsubRegion.gen_reg_opt.get(0).click();
        AddsubRegion.sub_reg_code.sendKeys(Sub_region_code);
        AddsubRegion.submit_sub_region_data.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4010/#/pages/basic-definitions/regions');
    });
    it('add new general region',function(){ 
        dashboard.BasicData.click();
        browser.sleep(100);
        AddGeneralRegion.GeneralRegion.click();
        AddGeneralRegion.addBtn.click();
        AddGeneralRegion.GeneralRegionName.sendKeys(reg_name);
        AddGeneralRegion.sectorelement.click();
        AddGeneralRegion.sectorOption.get(0).click();
        AddGeneralRegion.regCode.sendKeys(reg_code);
        AddGeneralRegion.saveBtn.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4010/#/pages/basic-definitions/general-region'); 
    });
    it('add distric',function(){
        
    });
});