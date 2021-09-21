sap.ui.define([
    'emc/fin/ar/controller/BaseController',
    'emc/fin/ar/util/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController, formatter, Filter, FilterOperator) {
    'use strict';
    return BaseController.extend("emc.fin.ar.controller.View1",{
        formatter: formatter,
        onNext: function() {
            //Step 1: I need to go to Mom
            var oAppCon = this.getView().getParent();
            //Step 2: Ask mom to go to View 2
            oAppCon.to("idView2");
        },
        onSearch: function (oEvent) {
            //step 1: read what value user enter on screen
            var query = oEvent.getParameter("query");
            //step 2: build a filter
            var oFilter = new Filter("name", FilterOperator.Contains, query);
            var oFilter2 = new Filter("type", FilterOperator.Contains, query);
            var oMain = new Filter({
                filters: [oFilter, oFilter2],
                and:false
            });
            //step 3: get list object and inject filter
            this.getView().byId("idList").getBinding("items").filter(oMain);
        },
        onDelete: function (oEvent) {
            //get the list item object on which user fire delete
            var oItem = oEvent.getParameter("listItem");
            //get the list object 
            //var oList = this.getView().byId("idList");
            var oList = oEvent.getSource();
            //remove the item from list
            oList.removeItem(oItem);
        }
    });
});