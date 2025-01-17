sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit3/model/formatter",
    "sap/ui/core/Fragment"
], (Controller,
	Formatter, Fragment) => {
    "use strict";

    return Controller.extend("stk.starterkit3.controller.CustomerDetails", {
        formatter: Formatter,
        onInit() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMached, this);
        },

        _onPatternMached: function(oEvent){
            this.getView().bindElement({
                path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                parameters: {
                    expand: "Orders,Orders/Employee,Orders/Employee/Employee1"
                }
            });
        },
        onPress: function(oEvent){
            var oView = this.getView();
            if (!this.byId("idDialog")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "stk.starterkit3.view.ContactInfoDialog",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("idDialog").open();
            }
        },

        onButtonClosePress: function(){
            this.byId("idDialog").close();
            // oEvent.getSource().getParent().close();
            // var oView = this.getView();
            // var oDialog2 = sap.ui.xmlfragment(oView.getId(),"ContactInfoDialog",this);
            // if (!this.byId("idDialog")) {
            //     Fragment.load({
            //         id: oView.getId(),
            //         name: "stk.starterkit3.view.ContactInfoDialog"
            //     }).then(function (oDialog) {
            //         oView.addDependent(oDialog);
            //         oDialog.close();
            //     });
            // } else {
            //     this.byId("idDialog").close();
            // }
        }
    });
});