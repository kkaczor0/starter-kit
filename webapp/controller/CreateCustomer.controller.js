sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit3.controller.CreateCustomer", {
        onInit() {

        },
        onCreateCustomerButton(){
            var sId = this.byId("customerIdInput").getValue();
            var sName = this.byId("customerNameInput").getValue();
            this.getView().getModel().create("/Customers", {
                CustomerID: {sId},
                CompanyName: {sName}
            })
        }
    });

});