let AddNewDistrict = function(){
    this.district =element(by.xpath("//span[text()='المناطق ']"));
    this.Add_districtBtn=  element(by.css("a.ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted"));

    this.sub_reg = element(by.formControlName("regionId"));
    this.sub_reg_opt= element.all(by.className("ng-option")); 

    this.districtName=element(by.xpath("//input[@ng-reflect-name='name']"));
    this.districtCode = element(by.xpath("//input[@ng-reflect-name='code']"));
    this.submit_district_data=element(by.xpath("//button[@type='submit']"));

};
module.exports=new AddNewDistrict();