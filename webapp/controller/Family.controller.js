sap.ui.define([
    'com/ss/jpb/rp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("com.ss.jpb.rp.contoller.Family", {
        
        onBack: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("home");
        },
        onSelectItem: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("family");
        }
    });
});