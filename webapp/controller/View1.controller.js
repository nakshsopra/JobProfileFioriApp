sap.ui.define([
    'com/ss/jpb/rp/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("com.ss.jpb.rp.contoller.View1", {
        onInterviewQues: function(){
            // 1. get the mother object
            var oAppCon = this.getView().getParent();
            // 2. Navigate to the second child using to function
            oAppCon.to("idInterviewQues");
        },

        onFamily: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idFamily");
        },

        onRole: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idRole");
        },

        onCompetencies: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idCompetencies");
        }

    });
});