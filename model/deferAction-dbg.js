/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"fin/ap/approvebankpayments/model/formatter"
], function(Formatter) {
	"use strict";

	var _formatter = Formatter;
	var _deferDaysPeriod;

	return {
		checkDeferDaysPeriod: function(context) {
			_deferDaysPeriod = context.getObject().ResubmissionDays;
		},

		getDeferSettings: function() {
			var deferDate = new Date();
			if (_deferDaysPeriod) {
				deferDate.setDate(deferDate.getDate() + _deferDaysPeriod);
			}

			return {
				date: _formatter.dateTimeToDate(deferDate),
				minDate: _formatter.dateTimeToDate(new Date())
			};
		}
	};
});