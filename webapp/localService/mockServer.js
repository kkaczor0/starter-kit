sap.ui.define([
	"sap/ui/core/util/MockServer"
], (MockServer) => {
	"use strict";

	return {
		init:  function () {
			
			// create
			const oMockServer = new MockServer({
				rootUri: "/V2/Northwind/Northwind.svc/"
			});

			const oUrlParams = new URLSearchParams(window.location.search);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUrlParams.get("serverDelay") || 999
			});

			// simulate
            oMockServer.simulate("../localService/metadata.xml", {
				sMockdataBaseUrl: "../localService/mockdata",
				bGenerateMissingMockData: true
			});
			// const sPath = sap.ui.require.toUrl("project4/localService");
			// oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start
			oMockServer.start();

			// var msg = 'Mock test data';
			// MessageToast.show(msg);
		}
	};
});





// sap.ui.define([

//     "sap/ui/core/util/MockServer",

//     "sap/base/Log"

// ], function (MockServer, Log) {

//     "use strict";

//     return {

//         /**

//         * Initializes the mock server.

//         * You can configure the delay with the URL parameter "serverDelay".

//         * The local mock data in this folder is returned instead of the real data for testing.

//         * @public

//         */

//         init: function () {

//             // create

//             var oMockServer = new MockServer({

//                 rootUri: "/V2/Northwind/Northwind.svc/"

//             });

//             // simulate against the metadata and mock data

//             oMockServer.simulate("../localService/metadata.xml", {

//                 sMockdataBaseUrl: "../localService/mockdata",

//                 bGenerateMissingMockData: true

//             })

//             // start

//             oMockServer.start();

//             Log.info("Running the app with mock data");

//         }

//     };

 

// });