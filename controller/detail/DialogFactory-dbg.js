/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"fin/ap/approvebankpayments/controller/detail/batch/ConfirmBatchActionDialog",
	"fin/ap/approvebankpayments/controller/ConfirmUndoDialog",
	"fin/ap/approvebankpayments/controller/DeferDateDialog",
	"fin/ap/approvebankpayments/controller/detail/EditDueDateDialog",
	"fin/ap/approvebankpayments/controller/detail/EditInstructionKeyDialog",
	"fin/ap/approvebankpayments/controller/detail/batch/TakeOverDialog",
	"fin/ap/approvebankpayments/model/deferAction"
	/* eslint-disable max-params */
], function(
	ConfirmBatchActionDialog,
	ConfirmUndoDialog,
	DeferDateDialog,
	EditDueDateDialog,
	EditInstructionKeyDialog,
	TakeOverDialog,
	DeferAction) {
	/* eslint-enable */
	"use strict";

	var _deferAction = DeferAction;
	var _editInstructionKey;

	return {
		askConfirmBatchAction: function(oView, oModel, oContext, aItems) {
			var oDialog = new ConfirmBatchActionDialog(oView, oModel, oContext, aItems);
			return oDialog.getPromise();
		},

		askConfirmUndo: function(oView, context) {
			return new ConfirmUndoDialog(oView, context);
		},

		askDeferDate: function(oView) {
			return new DeferDateDialog(oView);
		},

		askEditDueDate: function(oView, oModel) {
			return new EditDueDateDialog(oView, oModel);
		},

		askEditInstructionKey: function(oView, aPayments) {
			if (_editInstructionKey === undefined) {
				_editInstructionKey = new EditInstructionKeyDialog(oView);
			}

			return _editInstructionKey.selectInstructionKey(aPayments);
		},

		askTakeOver: function(oView, oModel) {
			return new TakeOverDialog(oView, oModel);
		},

		getDeferSettings: function() {
			return _deferAction.getDeferSettings();
		},

		checkDeferDaysPeriod: function(context) {
			_deferAction.checkDeferDaysPeriod(context);
		}
	};
});