/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/m/Link",
	"sap/m/MessageStrip",
    "sap/ui/base/Object",
    "sap/ui/core/Fragment",
	"sap/ui/Global",
	"sap/ui/model/json/JSONModel",
    "fin/ap/approvebankpayments/model/Messaging"
], function(
	Link,
	MessageStrip,
	BaseObject,
	Fragment,
	UI,
	JSONModel,
	Messaging) {
	"use strict";

	var fragment = {
		"": "fin.ap.approvebankpayments.view.list.ConfirmSubmitNoAuthDialog",
		"S": "fin.ap.approvebankpayments.view.list.ConfirmSubmitSmsDialog",
		"I": "fin.ap.approvebankpayments.view.list.ConfirmSubmitAppDialog"
	};

	var selectionTypeTitles = {
		"": "confirmSubmitDialogTitle",
		"O": "confirmSubmitSingleDialogTitle"
	};

	var selectionTypeMessages = {
		"": "confirmSubmitDialogMessage",
		"L": "confirmSubmitSelectedDialogMessage",
		"O": "confirmSubmitCurrentMessage"
	};

	var _messaging = Messaging;
	
	var actionModel = new JSONModel({
		confirmSubmitDialogMessage: ""
	});

	var Dialog = BaseObject.extend("fin.ap.approvebankpayments.controller.list.ConfirmSubmitDialog", {
		_resolve: null,
		_reject: null,


		constructor: function(oView, authType, selectionType) {
			var selectedFragment = fragment[authType] || fragment[""];
			var fragmentId = oView.createId("ConfirmSubmitDialog");
			this._oDialog = UI.xmlfragment(fragmentId, selectedFragment, this);
			this._oDialog.setModel(actionModel, "action");
			this.codeInput = Fragment.byId(fragmentId, "nameInput");
			this.i18n = oView.getModel("@i18n").getResourceBundle();
			actionModel.setProperty("/confirmSubmitDialogTitle", this.i18n.getText(selectionTypeTitles[selectionType] || selectionTypeTitles[""]));
			actionModel.setProperty("/confirmSubmitDialogMessage", this.i18n.getText(selectionTypeMessages[selectionType] || selectionTypeMessages[""]));
			oView.addDependent(this._oDialog);

			return new Promise(function(fnResolve, fnReject) {
				this._resolve = fnResolve;
				this._reject = fnReject;
				this._oDialog.open();
			}.bind(this));
		},

		onSubmitDialogOkPress: function() {
			var authCode = this.codeInput ? this.codeInput.getValue() : undefined;
			if (this.codeInput && !authCode) {
				this.codeInput.setValueStateText(this.i18n.getText("missingEntry"));
				this.codeInput.setValueState("Error");
				return;
			}
			this._oDialog.close();
			this._resolve(authCode);
		},

		onSubmitDialogCancelPress: function() {
			this._oDialog.close();
			this._reject();
		},

		onAfterSubmitClose: function() {
			this._oDialog.destroy();
		},

		sendSmsCode: function() {
			var model = this._oDialog.getModel();
			_messaging.actionStarted(this.i18n.getText("confirmSubmitDialogTitle"));

			model.callFunction("/sendToken", {
				success: _messaging.actionFinished.bind(null, this.i18n.getText("verificationSend")),
				error: function() {
					_messaging.addActionError(this.i18n.getText("verificationNotSend"));
					_messaging.actionFinished();
				}.bind(this),
				urlParameters: {
					Action: "'X'"
				},
				method: "POST"
			});
		}
	});

	Dialog.addSubmitAllMessageStrip = function(tabBar, controller) {
		var messageStrip = new MessageStrip(tabBar.getId() + "--submitReviewedMsgStrip", {
			enableFormattedText: true,
			showIcon: true,
			text: "{batchListView>/submitReviewedText}",
			type: "Information",
			visible: "{batchListView>/showSubmitStrip}"
		});

		var link = new Link(messageStrip.getId() + "--submitReviewedLink", {
			text: "{@i18n>dialogSubmitButtonText}"
		});

		link.attachPress(controller.onSubmitReviewed, controller);

		messageStrip.addStyleClass("sapUiSmallMargin")
			.setLink(link);
		
		tabBar.insertContent(messageStrip, 1);
	};

	return Dialog;
});
