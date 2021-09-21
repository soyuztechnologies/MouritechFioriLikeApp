sap.ui.define([
    'emc/fin/ar/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc.fin.ar.controller.Supplier",{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("supplier").attachMatched(this.herculis, this);
        },
        herculis: function(oEvent){
            var sPath = '/suppliers/0';
            this.getView().bindElement(sPath);
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        }
    });
});