/*global QUnit*/

sap.ui.define([
	"stk/starterkit3/controller/Master2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Master2 Controller");

	QUnit.test("I should test the Master2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
