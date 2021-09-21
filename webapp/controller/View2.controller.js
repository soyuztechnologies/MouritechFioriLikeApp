sap.ui.define([
    'emc/fin/ar/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("emc.fin.ar.controller.View2",{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        },
        onSupplier: function(){
            this.oRouter.navTo("supplier");
        },
        herculis: function(oEvent){
            var sIndex = oEvent.getParameter("arguments").fruitId;
            var sPath = '/fruits/' + sIndex;
            this.getView().bindElement(sPath);
        },
        onBack: function(){
            this.getView().getParent().to("idView1");
        }
    });
});