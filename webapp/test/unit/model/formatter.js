sap.ui.define([
    "stk/starterkit3/model/formatter"
], function (
    formatter
) {
    "use strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);
        oOptions.assert.strictEqual(sName, oOptions.expected, "The name was correctly formatted: " + sName);

    }

    QUnit.test("Should format Grzegorz Malczewski to G. Maleczewski", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Grzegorz",
            lastName: "Malczewski",
            expected: "G. Malczewski"
        });
    });

    QUnit.test("Should format Katarzyna Kaczorowska to K. Kaczorowska", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Katarzyna",
            lastName: "Kaczorowska",
            expected: "K. Kaczorowska"
        });
    });

    QUnit.test("Should format Joanna Kowalska-Nowak to J. Kowalska", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Joanna",
            lastName: "Kowalska-Nowak",
            expected: "J. Kowalska"
        });
    });
});
