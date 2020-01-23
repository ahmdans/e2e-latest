let AddGeneralRegion = function(){
    
    this.GeneralRegion = element(by.xpath("//span[text()='الإدارة العامه']"));

    this.addBtn = element(by.css("a.ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted"));

    this.GeneralRegionName = element(by.formControlName("name"));

    this.sectorelement =  element(by.formControlName("sectorId"));
    this.sectorOption = element.all(by.className("ng-option"));

    this.regCode =  element(by.formControlName("code"));
    
    this.saveBtn =  element(by.css("button.btn.btn-primary"));
};
module.exports = new AddGeneralRegion();