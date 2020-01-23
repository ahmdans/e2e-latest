let login = function () {
    this.sectorelement = element(by.formControlName("sectorId"));
    this.sectoreoption = element.all(by.className("ng-option")); // return list of elements 

    this.generalRegion = element(by.formControlName("generalRegionId"));
    this.generalRegionoption = element.all(by.className("ng-option"));// return list of elements
    
    this.sub_region = element(by.formControlName("regionId"));
    this.sub_regionoption = element.all(by.className("ng-option"));// return list of elements


    this.userName = element(by.formControlName("userName"));
    this.userNameOption = element.all(by.className("ng-option"));

    this.vendinstation = element(by.formControlName("vendingStationId"));
    this.vendinstationoption = element.all(by.className("ng-option"));// return list of elements

    this.password = element(by.formControlName("password"))

    this.loginBtn = element(by.xpath("//button[@type='submit']"));

    this.modalAlert = element(by.css("div.modal-body"));
    };

module.exports = new login();
