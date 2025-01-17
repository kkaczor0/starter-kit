sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit3.controller.CustomersList", {
        onInit() {
        },

        onCustomerPress: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomerDetails", {
                CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
            });
        },

        onCustomerCreateButton: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CreateCustomer");
        },
        onListEmployeesButton: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("EmployeeList");
        }
    });

});