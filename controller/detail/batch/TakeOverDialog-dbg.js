/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
/*global Promise */
sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/Global",
	"sap/ui/model/json/JSONModel"
], function(Parent, UI, JSONModel) {
	"use strict";

	var takeOverDialogFragment = "fin.ap.approvebankpayments.view.batch.TakeOverDialog";

	return Parent.extend("fin.ap.approvebankpayments.controller.detail.batch.TakeOverDialog", {
		_resolve: null,
		_reject: null,

		constructor: function(oView, oModel) {
			this._oDialog = UI.xmlfragment(oView.createId("TakeOverDialog"), takeOverDialogFragment, this);
			oModel.message = oView.getModel("@i18n").getResourceBundle().getText("takeOverDialogMessage", oModel.userName);
			oView.addDependent(this._oDialog);
			this._oDialog.setModel(new JSONModel(oModel));

			return new Promise(function(fnResolve, fnReject) {
				this._resolve = fnResolve;
				this._reject = fnReject;
				this._oDialog.open();
			}.bind(this));
		},

		onTakeOverDialogOkPress: function() {
			this._oDialog.close();
			this._resolve();
		},

		onTakeOverDialogCancelPress: function() {
			this._oDialog.close();
			this._reject();
		},

		onAfterTakeOverClose: function() {
			this._oDialog.destroy();
		}
	});
});