sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("com.ss.jpb.rp.Component", {
        
        metadata:{
            manifest: "json"
        },

        inti: function(){
            // like constructor of this class
            // ABAP -SUPER->
            // IN js we can call parent class constructor in child class
            UIComponent.prototype.init.apply(this);
        },

        createContent: function(){
            // We will create UI5 app structure
            var oView = new sap.ui.view({
                viewName: "com.ss.jpb.rp.view.App",
                type: "XML"
            });

            // get the object of the container control
            var oAppCon = oView.byId("appCon");

            var oView1 = new sap.ui.view({
                viewName: "com.ss.jpb.rp.view.View1",
                type: "XML",
                id:"idView1"
            });

            var oFamily = new sap.ui.view({
                viewName: "com.ss.jpb.rp.view.Family",
                type: "XML",
                id: "idFamily"
            });

            var oRole = new sap.ui.view({
                viewName: "com.ss.jpb.rp.view.Role",
                type: "XML",
                id: "idRole"
            });

            var oCompetencies = new sap.ui.view({
                viewName: "com.ss.jpb.rp.view.Competencies",
                type: "XML",
                id: "idCompetencies"
            });

            oAppCon.addPage(oView1).addPage(oFamily).addPage(oRole).addPage(oCompetencies);
            
            return oView;
        },

        destroy: function(){

        }
    });
    
});