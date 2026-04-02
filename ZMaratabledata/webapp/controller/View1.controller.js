sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.appZMaratabledata.controller.View1", {
		
		onInit:function(){
			var oModel = new sap.ui.model.odata.v2.ODataModel("/HANA/sap/opu/odata/sap/Zcdsmaratable_cds/");
			this.getView().setModel(oModel);
		}
	});
});