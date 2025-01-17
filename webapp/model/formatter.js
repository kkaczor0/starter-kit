sap.ui.define([], function() {
	"use strict";
	return { 
        formatName: function (sFirstName, sLastName) {
            const lc_reg = /-.*/gi;
            sLastName = sLastName.replace(lc_reg, "");
            return sFirstName[0] + ". " + sLastName;
        }
	};
});