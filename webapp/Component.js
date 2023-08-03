sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("com.ss.jpb.rp.Component", {
        
        metadata:{
            manifest: "json"
        },

        init: function(){
            
            // like constructor of this class
            // ABAP -SUPER->
            // IN js we can call parent class constructor in child class
            UIComponent.prototype.init.apply(this);
            // standard function available in parent class UIComponent
            var oRouter = this.getRouter();
            // Initialise router, scan for routing configuration in manifest file
            oRouter.initialize();
            
        },

        destroy: function(){

        }
    });
    
});