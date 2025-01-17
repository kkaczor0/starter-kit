sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit3/model/formatterOrders",
], (Controller, Formatter) => {
    "use strict";

    return Controller.extend("stk.starterkit3.controller.EmployeeList", {
        formatter: Formatter,
        onInit() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("EmployeeList").attachPatternMatched(this._onPatternMached, this);
        },
        _onPatternMached: function (oEvent) {
            this.getView().bindElement({
                path: "/Employees",
                parameters: {
                    expand: "Orders"
                }
            });
        },
        onMotivate: function (oEvent) {
            var oEmployee = oEvent.getSource().getBindingContext().getObject();
            var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@evilinsult.com";
            var sSubject = "Good job!";
            // var sBody = "You are doing great! Thank you!";

            var oModel = new sap.ui.model.json.JSONModel();
            this.getView().setModel(oModel, "motivationalModel");
            oModel.loadData("/generate_insult.php", {
                lang: "en",
                type: "json"
            }).then(function () { 
                var sBody = oModel.getData().insult;
                sap.m.URLHelper.triggerEmail( sEmail, sSubject, sBody);
            });  

            // $.ajax({
            //     url: "/evilinsult/generate_insult.php",
            //     data: {
            //         lang: "en",
            //         type: "json"
            //     },
            //     success: function (oResponse) {
            //         var sBody = JSON.parse(oResponse).insult;
            //         sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            //     }

            // });
        }
    });

});