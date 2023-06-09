sap.ui.define([
    'com/ss/jpb/rp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("com.ss.jpb.rp.contoller.Family", {
        onBack: function(){
            // 1. get the mother object
            var oAppCon = this.getView().getParent();
            // 2. Navigate to the second child using to function
            oAppCon.to("idView1");
        }
    });
});