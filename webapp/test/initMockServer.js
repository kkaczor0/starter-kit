sap.ui.define([
    "stk/starterkit3/localService/mockServer"
], function (mockserver,
	mockServer) {
	"use strict";
    debugger
	// initialize the mock server
	
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);

	
});