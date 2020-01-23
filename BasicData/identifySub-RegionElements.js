let AddsubRegion = function(){
    this.sub_region = element(by.css("nb-icon.menu-icon.ng-tns-c24-50.fa.fa-columns.ng-star-inserted"));
    this.Add_subBtn = element(by.css("a.ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted"));
    this.sub_regionName = element(by.formControlName("name"));
    this.gen_reg = element(by.formControlName("generalRegionId"));
    this.gen_reg_opt= element.all(by.className("ng-option"));
    this.sub_reg_code=element(by.formControlName("code"));
    this.submit_sub_region_data= element(by.css("button.btn.btn-primary"));
};
module.exports=new AddsubRegion();